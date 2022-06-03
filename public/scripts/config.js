const config = {
    burni_server_baseURL: "https://burni.fhir.tw",
    fhir_server_baseURL: "https://siim.hapi.fhir.tw",
    dicom_server_baseURL:"https://siim.raccoon.fhir.tw",
    bluelight_baseURL: "https://cylab.dicom.tw/cylab/siim/bluelight/html/start.html",
    bluelight_WSI_baseURL: "https://cylab.dicom.tw/cylab/siim/bluelight-WSI/html/index.html"
}
const envConfig = {
    mainHostName : '127.0.0.1', 
    port : '8081',
    QIDO : {
        hostName :config.dicom_server_baseURL.replace('https://', '') , 
        api : 'dicom-web'
    } , 
    WADO : {
        hostName : config.dicom_server_baseURL.replace('https://', '') ,
        api : 'dicom-web'
    } , 
    FHIR : {
        hostName : config.burni_server_baseURL.replace('https://', '') , 
        api : 'api/fhir'
    } ,
    FHIRHostName : config.burni_server_baseURL.replace('https://', '')
}