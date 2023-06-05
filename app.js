
const { convert } = require("html-to-text");
async function logJSONData() {
  const response = await fetch("https://jobtest.vn/assets/cv_1.html");
  const jsonData = await response.text();
  const options = {
    wordwrap: 130,
    selectors: [{ selector: "img", format: "skip" }],
    // ...
  };
  const text = convert(jsonData, options);
  return text;
}

const api_key = "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";

// Using ChatGPT
async function example() {
  const { ChatGPTAPI } = await import("chatgpt");
//   const { ChatGPTConversation } = await import("chatgpt");
  const api = new ChatGPTAPI({
    apiKey: api_key,
    completionParams: {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      top_p: 0.8,
    },
  });
//   const conversation = new ChatGPTConversation(api);
  api.create
  const messages = await logJSONData();
  let str_mess = "Hãy lấy ra các trường thông tin: Email, Phone, ngày sinh, địa chỉ, fanpage, vị trí công việc:" + messages;
  const result = await api.sendMessage(str_mess);
  console.log(result.text);
  // res.write(`<span>${result.text}</span>`);
}
example();

// pdfparse(pdffile).then(function (data) {
//   text_of_pdf = data;
//   // console.log(text_of_pdf.text);
//   let str_mess =
//     "Hãy lấy ra các thông tin cá nhân trong chuỗi sau:" + text_of_pdf.text;
//      example(str_mess);
// });
