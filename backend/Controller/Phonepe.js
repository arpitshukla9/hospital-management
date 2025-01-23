import crypto from 'crypto';
import axios from 'axios';
export const newPayment=async(req,res)=>{
    try{
        const salt_key ="099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"; 
        const merchent_id ="PGTESTPAYUAT"; 
        const marchentId = req.body.transectionId;
        const data =
            {
                merchantId: merchent_id,
                merchantTransactionId: marchentId,
                merchantUserId: req.body.MUID,
                name:req.body.name,
                amount: req.body.amount*100,
                redirectUrl: `https://localhost:8000/status/${marchentId}`,
                redirectMode: "POST",
                mobileNumber: req.body.Number,
                paymentInstrument: {
                  "type": "PAY_PAGE"
              }
              
        }
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndx = 1;
        const string = payloadMain+'/pg/v1/pay'+salt_key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checkSum = sha256+'###'+keyIndx;
        const prod_url = "https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay";
        const options = {
            method: 'POST',
            url: prod_url,
            headers: {
                  accept: 'application/json',
                  'Content-Type': 'application/json',
                  'X-VERIFY':checkSum
                          },
          data: {
            request:payloadMain
          }
          };
          axios
            .request(options)
                .then(function (response) {
                console.log(response.data);
                return res.status(200).json(response.data.data.instrumentResponse.redirectInfo.url);
            })
            .catch(function (error) {
              console.error(error);
            });
    }catch(e){
        return res.status(500).send("Internal Server Error");
    }
}

export const checkStatus = async(req, res) => {
    const merchantTransactionId = res.req.body.transactionId
    const merchantId = res.req.body.merchantId

    const keyIndex = 1;
    const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + "###" + keyIndex;

    const options = {
    method: 'GET',
    url: `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': `${merchantId}`
    }
    };

    // CHECK PAYMENT TATUS
    axios.request(options).then(async(response) => {
        if (response.data.success === true) {
            const url = `http://localhost:3000/success`
            return res.redirect(url)
        } else {
            const url = `http://localhost:3000/failure`
            return res.redirect(url)
        }
    })
    .catch((error) => {
        console.error(error);
    });
};
