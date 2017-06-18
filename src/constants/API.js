/**
 * Created by lin on 17-2-12.
 *
 * 接口字典
 *
 */
export const HTTP_BASE = 'http://localhost/UUAP/index.php/';

//验证码系列
export const API_GET_IMG_CAPTCHA    = HTTP_BASE + 'platform/GetImgCaptcha?';    //获取图片验证码
export const API_GET_VOICE_CAPTCHA  = HTTP_BASE + 'platform/GetVoiceCaptcha?';  //获取语音验证码
export const API_SEND_PHONE_CAPTCHA = HTTP_BASE + 'platform/SendPhoneCaptcha';  //发送手机验证码
