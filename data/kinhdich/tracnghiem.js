const QUESTIONS = [
  // Câu hỏi hình quẻ
{q:"Quẻ CÀN VI THIÊN là hình nào?", type:"hex", opts:["111111","000000","011111","111110"], ans:0}, //1
{q:"Quẻ KHÔN VI ĐỊA là hình nào?", type:"hex", opts:["100000","000000","010000","001000"], ans:1}, //2
{q:"Quẻ THỦY LÔI TRUÂN là hình nào?", type:"hex", opts:["001001","100010","010001","000101"], ans:2}, //3
{q:"Quẻ SƠN THỦY MÔNG là hình nào?", type:"hex", opts:["001001","010010","010001","100010"], ans:3}, //4
{q:"Quẻ THỦY THIÊN NHU là hình nào?", type:"hex", opts:["010111","010110","011000","100010"], ans:0}, //5
{q:"Quẻ THIÊN THỦY TỤNG là hình nào?", type:"hex", opts:["110101","111010","101011","111100"], ans:1}, //6
{q:"Quẻ ĐỊA THỦY SƯ là hình nào?", type:"hex", opts:["000001","100000","000010","010000"], ans:2}, //7
{q:"Quẻ THỦY ĐỊA TỶ là hình nào?", type:"hex", opts:["000001","100000","000010","010000"], ans:3}, //8
{q:"Quẻ PHONG THIÊN TIỂU SÚC là hình nào?", type:"hex", opts:["110111","101111","111011","111101"], ans:0}, //9
{q:"Quẻ THIÊN TRẠCH LÝ là hình nào?", type:"hex", opts:["101111","111011","110111","111101"], ans:1}, //10
{q:"Quẻ ĐỊA THIÊN THÁI là hình nào?", type:"hex", opts:["000111","111000","101010","010101"], ans:0}, //11
{q:"Quẻ THIÊN ĐỊA BĨ là hình nào?", type:"hex", opts:["111000","000111","101010","010101"], ans:0}, //12
{q:"Quẻ THIÊN HỎA ĐỒNG NHÂN là hình nào?", type:"hex", opts:["111101","101111","110101","010111"], ans:0}, //13
{q:"Quẻ HỎA THIÊN ĐẠI HỮU là hình nào?", type:"hex", opts:["101111","111101","101011","110101"], ans:0}, //14
{q:"Quẻ ĐỊA SƠN KHIÊM là hình nào?", type:"hex", opts:["000001","000100","100000","001000"], ans:0}, //15
{q:"Quẻ LÔI ĐỊA DỰ là hình nào?", type:"hex", opts:["100000","000001","001000","010000"], ans:0}, //16
{q:"Quẻ TRẠCH LÔI TÙY là hình nào?", type:"hex", opts:["011100","100011","110010","001101"], ans:0}, //17
{q:"Quẻ SƠN PHONG CỐ là hình nào?", type:"hex", opts:["001011","011000","100110","110001"], ans:0}, //18
{q:"Quẻ ĐỊA TRẠCH LÂM là hình nào?", type:"hex", opts:["000011","011000","100001","001000"], ans:0}, //19
{q:"Quẻ PHONG ĐỊA QUÁN là hình nào?", type:"hex", opts:["011000","000011","110000","000110"], ans:2}, //20
{q:"Quẻ HỎA LÔI PHỆ HẠP là hình nào?", type:"hex", opts:["101001","001101","101100","010011"], ans:0}, //21
{q:"Quẻ SƠN HỎA BÍ là hình nào?", type:"hex", opts:["001101","101001","011001","110101"], ans:0}, //22
{q:"Quẻ SƠN ĐỊA BÁC là hình nào?", type:"hex", opts:["001000","000001","100000","010000"], ans:0}, //23
{q:"Quẻ ĐỊA LÔI PHỤC là hình nào?", type:"hex", opts:["000100","100000","001000","010000"], ans:0}, //24
{q:"Quẻ THIÊN LÔI VÔ VỌNG là hình nào?", type:"hex", opts:["111100","100111","110001","001111"], ans:0}, //25
{q:"Quẻ SƠN THIÊN ĐẠI SÚC là hình nào?", type:"hex", opts:["001111","111001","001110","110001"], ans:0}, //26
{q:"Quẻ SƠN LÔI DI là hình nào?", type:"hex", opts:["001100","100001","001000","100010"], ans:0}, //27
{q:"Quẻ TRẠCH PHONG ĐẠI QUÁ là hình nào?", type:"hex", opts:["011011","110011","011110","101101"], ans:0}, //28
{q:"Quẻ KHẨM VI THỦY là hình nào?", type:"hex", opts:["010010","001001","100100","010101"], ans:0}, //29
{q:"Quẻ LY VI HỎA là hình nào?", type:"hex", opts:["101101","010010","101010","010101"], ans:0}, //30
{q:"Quẻ TRẠCH SƠN HÀM là hình nào?", type:"hex", opts:["011001","001011","110001","010011"], ans:0}, //31
{q:"Quẻ LÔI PHONG HẰNG là hình nào?", type:"hex", opts:["100011","011001","110010","001101"], ans:0}, //32
{q:"Quẻ THIÊN SƠN ĐỘN là hình nào?", type:"hex", opts:["111001","001111","110001","011110"], ans:0}, //33
{q:"Quẻ LÔI THIÊN ĐẠI TRÁNG là hình nào?", type:"hex", opts:["100111","111001","110100","001111"], ans:0}, //34
{q:"Quẻ HỎA ĐỊA TẤN là hình nào?", type:"hex", opts:["101000","000101","010100","100001"], ans:0}, //35
{q:"Quẻ ĐỊA HỎA MINH DI là hình nào?", type:"hex", opts:["000101","101000","010001","001010"], ans:0}, //36
{q:"Quẻ PHONG HỎA GIA NHÂN là hình nào?", type:"hex", opts:["011101","101011","110101","010110"], ans:0}, //37
{q:"Quẻ HỎA TRẠCH KHUÊ là hình nào?", type:"hex", opts:["101011","011101","101110","110011"], ans:0}, //38
{q:"Quẻ THỦY SƠN KIỂN là hình nào?", type:"hex", opts:["010001","001010","100001","010010"], ans:0}, //39
{q:"Quẻ LÔI THỦY GIẢI là hình nào?", type:"hex", opts:["100010","010100","001010","100100"], ans:0}, //40
{q:"Quẻ SƠN TRẠCH TỔN là hình nào?", type:"hex", opts:["001011","011001","110001","011010"], ans:0}, //41
{q:"Quẻ PHONG LÔI ÍCH là hình nào?", type:"hex", opts:["011100","100011","001011","110001"], ans:0}, //42
{q:"Quẻ TRẠCH THIÊN QUẢI là hình nào?", type:"hex", opts:["011111","111011","110111","111101"], ans:0}, //43
{q:"Quẻ THIÊN PHONG CẤU là hình nào?", type:"hex", opts:["111011","011111","111101","110110"], ans:0}, //44
{q:"Quẻ TRẠCH ĐỊA TỤY là hình nào?", type:"hex", opts:["011000","000011","100000","001000"], ans:0}, //45
{q:"Quẻ ĐỊA PHONG THĂNG là hình nào?", type:"hex", opts:["000011","011000","100001","000110"], ans:0}, //46
{q:"Quẻ TRẠCH THỦY KHỐN là hình nào?", type:"hex", opts:["011010","010011","101010","010101"], ans:0}, //47
{q:"Quẻ THỦY PHONG TỈNH là hình nào?", type:"hex", opts:["010011","011010","110010","001101"], ans:0}, //48
{q:"Quẻ TRẠCH HỎA CÁCH là hình nào?", type:"hex", opts:["011101","101011","011011","101110"], ans:0}, //49
{q:"Quẻ HỎA PHONG ĐỈNH là hình nào?", type:"hex", opts:["101011","011101","101110","110011"], ans:0}, //50
{q:"Quẻ CHẤN VI LÔI là hình nào?", type:"hex", opts:["100100","010010","001001","110110"], ans:0}, //51
{q:"Quẻ CẤN VI SƠN là hình nào?", type:"hex", opts:["001001","010010","100100","110110"], ans:0}, //52
{q:"Quẻ PHONG SƠN TIỆM là hình nào?", type:"hex", opts:["011001","001011","110001","010001"], ans:0}, //53
{q:"Quẻ LÔI TRẠCH QUY MUỘI là hình nào?", type:"hex", opts:["100011","011001","110010","001101"], ans:0}, //54
{q:"Quẻ LÔI HỎA PHONG là hình nào?", type:"hex", opts:["101100","100101","010010","110101"], ans:0}, //55
{q:"Quẻ HỎA SƠN LỮ là hình nào?", type:"hex", opts:["101001","001101","010100","100010"], ans:0}, //56
{q:"Quẻ TỐN VI PHONG là hình nào?", type:"hex", opts:["011011","110110","101101","010101"], ans:0}, //57
{q:"Quẻ ĐOÀI VI TRẠCH là hình nào?", type:"hex", opts:["011011","110110","101101","001001"], ans:0}, //58
{q:"Quẻ PHONG THỦY HOÁN là hình nào?", type:"hex", opts:["011010","010011","101010","001101"], ans:0}, //59
{q:"Quẻ THỦY TRẠCH TIẾT là hình nào?", type:"hex", opts:["010011","011010","101010","001011"], ans:0}, //60
{q:"Quẻ PHONG TRẠCH TRUNG PHÙ là hình nào?", type:"hex", opts:["011011","011010","110011","001110"], ans:0}, //61
{q:"Quẻ LÔI SƠN TIỂU QUÁ là hình nào?", type:"hex", opts:["100001","001100","010001","100111"], ans:0}, //62
{q:"Quẻ THỦY HỎA KÝ TẾ là hình nào?", type:"hex", opts:["010101","101010","010010","101101"], ans:0}, //63
{q:"Quẻ HỎA THỦY VỊ TẾ là hình nào?", type:"hex", opts:["101010","010101","010010","101101"], ans:0}, //64
  
  // Câu hỏi về hành
{ stt:65, q:"CÀN VI THIÊN thuộc hành nào?", type:"text", opts:["kim","mộc","thủy","thổ"], ans:0 },
{ stt:66, q:"KHÔN VI ĐỊA thuộc hành nào?", type:"text", opts:["kim","thổ","thủy","hỏa"], ans:1 },
{ stt:67, q:"THỦY LÔI TRUÂN thuộc hành nào?", type:"text", opts:["kim","mộc","thủy","hỏa"], ans:2 },
{ stt:68, q:"SƠN THỦY MÔNG thuộc hành nào?", type:"text", opts:["thủy","thổ","kim","hỏa"], ans:3 },
{ stt:69, q:"THỦY THIÊN NHU thuộc hành nào?", type:"text", opts:["thổ","kim","mộc","hỏa"], ans:0 },
{ stt:70, q:"Quẻ THIÊN THỦY TỤNG thuộc hành nào?", type:"text", opts:["kim","hỏa","mộc","thổ"], ans:1 },
{ stt:71, q:"Quẻ ĐỊA THỦY SƯ thuộc hành nào?", type:"text", opts:["Thổ","Thủy","Kim","Hỏa"], ans:1 },
{ stt:72, q:"Quẻ THỦY ĐỊA TỶ thuộc hành nào?", type:"text", opts:["Thủy","Thổ","Mộc","Kim"], ans:0 },
{ stt:73, q:"Quẻ PHONG THIÊN TIỂU SÚC thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:74, q:"Quẻ THIÊN TRẠCH LÝ thuộc hành nào?", type:"text", opts:["Kim","Thổ","Hỏa","Mộc"], ans:0 },
{ stt:75, q:"Quẻ ĐỊA THIÊN THÁI thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Hỏa"], ans:0 },
{ stt:76, q:"Quẻ THIÊN ĐỊA BĨ thuộc hành nào?", type:"text", opts:["Kim","Thổ","Mộc","Thủy"], ans:0 },
{ stt:77, q:"Quẻ THIÊN HỎA ĐỒNG NHÂN thuộc hành nào?", type:"text", opts:["Kim","Hỏa","Thổ","Mộc"], ans:1 },
{ stt:78, q:"Quẻ HỎA THIÊN ĐẠI HỮU thuộc hành nào?", type:"text", opts:["Hỏa","Kim","Thủy","Thổ"], ans:0 },
{ stt:79, q:"Quẻ ĐỊA SƠN KHIÊM thuộc hành nào?", type:"text", opts:["Thổ","Kim","Mộc","Thủy"], ans:0 },
{ stt:80, q:"Quẻ LÔI ĐỊA DỰ thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Thủy","Hỏa"], ans:0 },
{ stt:81, q:"Quẻ TRẠCH LÔI TÙY thuộc hành nào?", type:"text", opts:["Kim","Mộc","Thủy","Thổ"], ans:0 },
{ stt:82, q:"Quẻ SƠN PHONG CỐ thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Kim","Thủy"], ans:0 },
{ stt:83, q:"Quẻ ĐỊA TRẠCH LÂM thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Hỏa"], ans:0 },
{ stt:84, q:"Quẻ PHONG ĐỊA QUÁN thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Kim","Thủy"], ans:0 },
{ stt:85, q:"Quẻ HỎA LÔI PHỆ HẠP thuộc hành nào?", type:"text", opts:["Hỏa","Mộc","Thủy","Thổ"], ans:0 },
{ stt:86, q:"Quẻ SƠN HỎA BÍ thuộc hành nào?", type:"text", opts:["Thổ","Hỏa","Kim","Mộc"], ans:0 },
{ stt:87, q:"Quẻ SƠN ĐỊA BÁC thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Hỏa"], ans:0 },
{ stt:88, q:"Quẻ ĐỊA LÔI PHỤC thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Thủy","Kim"], ans:0 },
{ stt:89, q:"Quẻ THIÊN LÔI VÔ VỌNG thuộc hành nào?", type:"text", opts:["Kim","Mộc","Thủy","Thổ"], ans:0 },
{ stt:90, q:"Quẻ SƠN THIÊN ĐẠI SÚC thuộc hành nào?", type:"text", opts:["Thổ","Kim","Mộc","Thủy"], ans:0 },
{ stt:91, q:"Quẻ SƠN LÔI DI thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Thủy","Hỏa"], ans:0 },
{ stt:92, q:"Quẻ TRẠCH PHONG ĐẠI QUÁ thuộc hành nào?", type:"text", opts:["Kim","Mộc","Thủy","Thổ"], ans:0 },
{ stt:93, q:"Quẻ KHẢM VI THỦY thuộc hành nào?", type:"text", opts:["Thủy","Hỏa","Thổ","Kim"], ans:0 },
{ stt:94, q:"Quẻ LY VI HỎA thuộc hành nào?", type:"text", opts:["Hỏa","Thủy","Mộc","Thổ"], ans:0 },
{ stt:95, q:"Quẻ TRẠCH SƠN HÀM thuộc hành nào?", type:"text", opts:["Kim","Thổ","Thủy","Mộc"], ans:0 },
{ stt:96, q:"Quẻ LÔI PHONG HẰNG thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Kim","Thổ"], ans:0 },
{ stt:97, q:"Quẻ THIÊN SƠN ĐỘN thuộc hành nào?", type:"text", opts:["Kim","Thổ","Thủy","Mộc"], ans:0 },
{ stt:98, q:"Quẻ LÔI THIÊN ĐẠI TRÁNG thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thổ","Thủy"], ans:0 },
{ stt:99, q:"Quẻ HỎA ĐỊA TẤN thuộc hành nào?", type:"text", opts:["Hỏa","Thổ","Mộc","Kim"], ans:0 },
{ stt:100, q:"Quẻ ĐỊA HỎA MINH DI thuộc hành nào?", type:"text", opts:["Thổ","Hỏa","Thủy","Mộc"], ans:0 },
{ stt:101, q:"Quẻ PHONG HỎA GIA NHÂN thuộc hành nào?", type:"text", opts:["Mộc","Hỏa","Thổ","Thủy"], ans:0 },
{ stt:102, q:"Quẻ HỎA TRẠCH KHUÊ thuộc hành nào?", type:"text", opts:["Hỏa","Kim","Thủy","Thổ"], ans:0 },
{ stt:103, q:"Quẻ THỦY SƠN KIỂN thuộc hành nào?", type:"text", opts:["Thủy","Thổ","Mộc","Kim"], ans:0 },
{ stt:104, q:"Quẻ LÔI THỦY GIẢI thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:105, q:"Quẻ SƠN TRẠCH TỔN thuộc hành nào?", type:"text", opts:["Thổ","Kim","Mộc","Thủy"], ans:0 },
{ stt:106, q:"Quẻ PHONG LÔI ÍCH thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:107, q:"Quẻ TRẠCH THIÊN QUẢI thuộc hành nào?", type:"text", opts:["Kim","Thổ","Mộc","Thủy"], ans:0 },
{ stt:108, q:"Quẻ THIÊN PHONG CẤU thuộc hành nào?", type:"text", opts:["Kim","Mộc","Thủy","Thổ"], ans:0 },
{ stt:109, q:"Quẻ TRẠCH ĐỊA TỤY thuộc hành nào?", type:"text", opts:["Kim","Thổ","Mộc","Thủy"], ans:0 },
{ stt:110, q:"Quẻ ĐỊA PHONG THĂNG thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Thủy","Kim"], ans:0 },
{ stt:111, q:"Quẻ TRẠCH THỦY KHỐN thuộc hành nào?", type:"text", opts:["Kim","Thủy","Thổ","Mộc"], ans:0 },
{ stt:112, q:"Quẻ THỦY PHONG TỈNH thuộc hành nào?", type:"text", opts:["Thủy","Mộc","Kim","Thổ"], ans:0 },
{ stt:113, q:"Quẻ TRẠCH HỎA CÁCH thuộc hành nào?", type:"text", opts:["Kim","Hỏa","Thổ","Thủy"], ans:0 },
{ stt:114, q:"Quẻ HỎA PHONG ĐỈNH thuộc hành nào?", type:"text", opts:["Hỏa","Mộc","Thổ","Thủy"], ans:0 },
{ stt:115, q:"Quẻ CHẤN VI LÔI thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:116, q:"Quẻ CẤN VI SƠN thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Mộc"], ans:0 },
{ stt:117, q:"Quẻ PHONG SƠN TIỆM thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Thủy","Kim"], ans:0 },
{ stt:118, q:"Quẻ LÔI TRẠCH QUY MUỘI thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:119, q:"Quẻ LÔI HỎA PHONG thuộc hành nào?", type:"text", opts:["Mộc","Hỏa","Thổ","Thủy"], ans:0 },
{ stt:120, q:"Quẻ HỎA SƠN LỮ thuộc hành nào?", type:"text", opts:["Hỏa","Thổ","Mộc","Thủy"], ans:0 },
{ stt:121, q:"Quẻ TỐN VI PHONG thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:122, q:"Quẻ ĐOÀI VI TRẠCH thuộc hành nào?", type:"text", opts:["Kim","Thổ","Thủy","Mộc"], ans:0 },
{ stt:123, q:"Quẻ PHONG THỦY HOÁN thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:124, q:"Quẻ THỦY TRẠCH TIẾT thuộc hành nào?", type:"text", opts:["Thủy","Kim","Thổ","Mộc"], ans:0 },
{ stt:125, q:"Quẻ PHONG TRẠCH TRUNG PHU thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:126, q:"Quẻ LÔI SƠN TIỂU QUÁ thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Thủy","Kim"], ans:0 },
{ stt:127, q:"Quẻ THỦY HỎA KÝ TẾ thuộc hành nào?", type:"text", opts:["Thủy","Hỏa","Thổ","Mộc"], ans:0 },
{ stt:128, q:"Quẻ HỎA THỦY VỊ TẾ thuộc hành nào?", type:"text", opts:["Hỏa","Thủy","Thổ","Mộc"], ans:0 },

// Câu hỏi về 2 hành
{ stt:129, q:"Quẻ này ䷀ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Càn","Khôn - Khôn","Chấn - Chấn","Tốn - Tốn"], ans:0 },
{ stt:130, q:"Quẻ này ䷁ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Càn","Khôn - Khôn","Khảm - Khảm","Ly - Ly"], ans:1 },
{ stt:131, q:"Quẻ này ䷂ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Khảm","Càn - Khôn","Khảm - Chấn","Tốn - Đoài"], ans:2 },
{ stt:132, q:"Quẻ này ䷃ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Cấn","Ly - Tốn","Chấn - Càn","Cấn - Khảm"], ans:3 },
{ stt:133, q:"Quẻ này ䷄ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Càn","Càn - Khảm","Khôn - Chấn","Tốn - Ly"], ans:0 },
{ stt:134, q:"Quẻ này ䷅ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Khảm","Khảm - Càn","Ly - Tốn","Khảm - Tốn"], ans:0 },
{ stt:135, q:"Quẻ này ䷆ do 2 quẻ nào hợp thành?", type:"text", opts:["Khôn - Khảm","Khảm - Khôn","Càn - Chấn","Cấn - Đoài"], ans:0 },
{ stt:136, q:"Quẻ này ䷇ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Khôn","Khôn - Khảm","Tốn - Cấn","Ly - Chấn"], ans:0 },
{ stt:137, q:"Quẻ này ䷈ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Càn","Càn - Tốn","Khảm - Ly","Chấn - Khôn"], ans:0 },
{ stt:138, q:"Quẻ này ䷉ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Đoài","Đoài - Càn","Cấn - Ly","Tốn - Khảm"], ans:0 },
{ stt:139, q:"Quẻ này ䷊ do 2 quẻ nào hợp thành?", type:"text", opts:["Khôn - Càn","Càn - Khôn","Khảm - Ly","Chấn - Tốn"], ans:0 },
{ stt:140, q:"Quẻ này ䷋ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Khôn","Khôn - Càn","Ly - Khảm","Tốn - Chấn"], ans:0 },
{ stt:141, q:"Quẻ này ䷌ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Ly","Ly - Càn","Chấn - Khôn","Cấn - Đoài"], ans:0 },
{ stt:142, q:"Quẻ này ䷍ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Càn","Càn - Ly","Đoài - Khảm","Tốn - Chấn"], ans:0 },
{ stt:143, q:"Quẻ này ䷎ do 2 quẻ nào hợp thành?", type:"text", opts:["Khôn - Cấn","Cấn - Khôn","Khảm - Tốn","Ly - Đoài"], ans:0 },
{ stt:144, q:"Quẻ này ䷏ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Khôn","Khôn - Chấn","Càn - Khảm","Cấn - Ly"], ans:0 },
{ stt:145, q:"Quẻ này ䷐ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Chấn","Chấn - Đoài","Tốn - Khôn","Khảm - Càn"], ans:0 },
{ stt:146, q:"Quẻ này ䷑ do 2 quẻ nào hợp thành?", type:"text", opts:["Cấn - Tốn","Tốn - Cấn","Khôn - Ly","Đoài - Khảm"], ans:0 },
{ stt:147, q:"Quẻ này ䷒ do 2 quẻ nào hợp thành?", type:"text", opts:["Khôn - Đoài","Đoài - Khôn","Chấn - Càn","Tốn - Ly"], ans:0 },
{ stt:148, q:"Quẻ này ䷓ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Khôn","Khôn - Tốn","Khảm - Chấn","Càn - Cấn"], ans:0 },
{ stt:149, q:"Quẻ này ䷔ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Chấn","Chấn - Ly","Khảm - Tốn","Càn - Cấn"], ans:0 },
{ stt:150, q:"Quẻ này ䷕ do 2 quẻ nào hợp thành?", type:"text", opts:["Cấn - Ly","Ly - Cấn","Đoài - Khôn","Tốn - Khảm"], ans:0 },
{ stt:151, q:"Quẻ này ䷖ do 2 quẻ nào hợp thành?", type:"text", opts:["Cấn - Khôn","Khôn - Cấn","Chấn - Tốn","Ly - Càn"], ans:0 },
{ stt:152, q:"Quẻ này ䷗ do 2 quẻ nào hợp thành?", type:"text", opts:["Khôn - Chấn","Chấn - Khôn","Khảm - Đoài","Tốn - Cấn"], ans:0 },
{ stt:153, q:"Quẻ này ䷘ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Chấn","Chấn - Càn","Ly - Khôn","Đoài - Tốn"], ans:0 },
{ stt:154, q:"Quẻ này ䷙ do 2 quẻ nào hợp thành?", type:"text", opts:["Cấn - Càn","Càn - Cấn","Khảm - Chấn","Tốn - Ly"], ans:0 },
{ stt:155, q:"Quẻ này ䷚ do 2 quẻ nào hợp thành?", type:"text", opts:["Cấn - Chấn","Chấn - Cấn","Khôn - Ly","Càn - Khảm"], ans:0 },
{ stt:156, q:"Quẻ này ䷛ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Tốn","Tốn - Đoài","Khảm - Càn","Chấn - Khôn"], ans:0 },
{ stt:157, q:"Quẻ này ䷜ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Khảm","Ly - Ly","Càn - Càn","Chấn - Chấn"], ans:0 },
{ stt:158, q:"Quẻ này ䷝ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Ly","Khảm - Khảm","Khôn - Khôn","Đoài - Đoài"], ans:0 },
{ stt:159, q:"Quẻ này ䷞ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Cấn","Cấn - Đoài","Tốn - Khảm","Chấn - Ly"], ans:0 },
{ stt:160, q:"Quẻ này ䷟ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Tốn","Tốn - Chấn","Càn - Cấn","Khảm - Khôn"], ans:0 },
{ stt:161, q:"Quẻ này ䷠ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Cấn","Cấn - Càn","Ly - Chấn","Đoài - Tốn"], ans:0 },
{ stt:162, q:"Quẻ này ䷡ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Càn","Càn - Chấn","Khôn - Đoài","Khảm - Ly"], ans:0 },
{ stt:163, q:"Quẻ này ䷢ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Khôn","Khôn - Ly","Tốn - Càn","Cấn - Chấn"], ans:0 },
{ stt:164, q:"Quẻ này ䷣ do 2 quẻ nào hợp thành?", type:"text", opts:["Khôn - Ly","Ly - Khôn","Chấn - Đoài","Càn - Khảm"], ans:0 },
{ stt:165, q:"Quẻ này ䷤ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Ly","Ly - Tốn","Khảm - Cấn","Khôn - Càn"], ans:0 },
{ stt:166, q:"Quẻ này ䷥ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Đoài","Đoài - Ly","Càn - Khôn","Chấn - Tốn"], ans:0 },
{ stt:167, q:"Quẻ này ䷦ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Cấn","Cấn - Khảm","Tốn - Chấn","Ly - Càn"], ans:0 },
{ stt:168, q:"Quẻ này ䷧ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Khảm","Khảm - Chấn","Đoài - Tốn","Khôn - Ly"], ans:0 },
{ stt:169, q:"Quẻ này ䷨ do 2 quẻ nào hợp thành?", type:"text", opts:["Cấn - Đoài","Đoài - Cấn","Khảm - Tốn","Ly - Chấn"], ans:0 },
{ stt:170, q:"Quẻ này ䷩ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Chấn","Chấn - Tốn","Càn - Khôn","Đoài - Ly"], ans:0 },
{ stt:171, q:"Quẻ này ䷪ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Càn","Càn - Đoài","Khảm - Chấn","Tốn - Cấn"], ans:0 },
{ stt:172, q:"Quẻ này ䷫ do 2 quẻ nào hợp thành?", type:"text", opts:["Càn - Tốn","Tốn - Càn","Ly - Khôn","Chấn - Đoài"], ans:0 },
{ stt:173, q:"Quẻ này ䷬ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Khôn","Khôn - Đoài","Tốn - Ly","Khảm - Càn"], ans:0 },
{ stt:174, q:"Quẻ này ䷭ do 2 quẻ nào hợp thành?", type:"text", opts:["Khôn - Tốn","Tốn - Khôn","Cấn - Khảm","Ly - Đoài"], ans:0 },
{ stt:175, q:"Quẻ này ䷮ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Khảm","Khảm - Đoài","Càn - Chấn","Tốn - Cấn"], ans:0 },
{ stt:176, q:"Quẻ này ䷯ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Tốn","Tốn - Khảm","Khôn - Ly","Đoài - Càn"], ans:0 },
{ stt:177, q:"Quẻ này ䷰ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Ly","Ly - Đoài","Chấn - Khôn","Cấn - Tốn"], ans:0 },
{ stt:178, q:"Quẻ này ䷱ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Tốn","Tốn - Ly","Khảm - Càn","Đoài - Chấn"], ans:0 },
{ stt:179, q:"Quẻ này ䷲ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Chấn","Tốn - Tốn","Càn - Càn","Khôn - Khôn"], ans:0 },
{ stt:180, q:"Quẻ này ䷳ do 2 quẻ nào hợp thành?", type:"text", opts:["Cấn - Cấn","Khảm - Khảm","Ly - Ly","Đoài - Đoài"], ans:0 },
{ stt:181, q:"Quẻ này ䷴ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Cấn","Cấn - Tốn","Khôn - Đoài","Chấn - Ly"], ans:0 },
{ stt:182, q:"Quẻ này ䷵ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Đoài","Đoài - Chấn","Khảm - Tốn","Càn - Cấn"], ans:0 },
{ stt:183, q:"Quẻ này ䷶ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Ly","Ly - Chấn","Tốn - Đoài","Khôn - Khảm"], ans:0 },
{ stt:184, q:"Quẻ này ䷷ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Cấn","Cấn - Ly","Đoài - Tốn","Chấn - Khôn"], ans:0 },
{ stt:185, q:"Quẻ này ䷸ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Tốn","Chấn - Chấn","Càn - Càn","Khảm - Khảm"], ans:0 },
{ stt:186, q:"Quẻ này ䷹ do 2 quẻ nào hợp thành?", type:"text", opts:["Đoài - Đoài","Ly - Ly","Khôn - Khôn","Cấn - Cấn"], ans:0 },
{ stt:187, q:"Quẻ này ䷺ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Khảm","Khảm - Tốn","Càn - Ly","Chấn - Đoài"], ans:0 },
{ stt:188, q:"Quẻ này ䷻ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Đoài","Đoài - Khảm","Tốn - Chấn","Khôn - Cấn"], ans:0 },
{ stt:189, q:"Quẻ này ䷼ do 2 quẻ nào hợp thành?", type:"text", opts:["Tốn - Đoài","Đoài - Tốn","Ly - Khảm","Càn - Khôn"], ans:0 },
{ stt:190, q:"Quẻ này ䷽ do 2 quẻ nào hợp thành?", type:"text", opts:["Chấn - Cấn","Cấn - Chấn","Khảm - Ly","Đoài - Tốn"], ans:0 },
{ stt:191, q:"Quẻ này ䷾ do 2 quẻ nào hợp thành?", type:"text", opts:["Khảm - Ly","Ly - Khảm","Càn - Chấn","Tốn - Đoài"], ans:0 },
{ stt:192, q:"Quẻ này ䷿ do 2 quẻ nào hợp thành?", type:"text", opts:["Ly - Khảm","Khảm - Ly","Đoài - Cấn","Chấn - Tốn"], ans:0 },

//Quẻ hình thuộc hành
{ stt:193, q:"Quẻ hình ䷀ thuộc hành nào?", type:"text", opts:["Kim","Mộc","Thủy","Thổ"], ans:0 },
{ stt:194, q:"Quẻ hình ䷁ thuộc hành nào?", type:"text", opts:["Kim","Thổ","Thủy","Hỏa"], ans:1 },
{ stt:195, q:"Quẻ hình ䷂ thuộc hành nào?", type:"text", opts:["Thủy","Mộc","Kim","Thổ"], ans:1 },
{ stt:196, q:"Quẻ hình ䷃ thuộc hành nào?", type:"text", opts:["Thổ","Thủy","Kim","Mộc"], ans:0 },
{ stt:197, q:"Quẻ hình ䷄ thuộc hành nào?", type:"text", opts:["Thủy","Kim","Mộc","Thổ"], ans:0 },
{ stt:198, q:"Quẻ hình ䷅ thuộc hành nào?", type:"text", opts:["Kim","Thủy","Mộc","Thổ"], ans:0 },
{ stt:199, q:"Quẻ hình ䷆ thuộc hành nào?", type:"text", opts:["Thổ","Thủy","Kim","Hỏa"], ans:0 },
{ stt:200, q:"Quẻ hình ䷇ thuộc hành nào?", type:"text", opts:["Thủy","Thổ","Mộc","Kim"], ans:0 },
{ stt:201, q:"Quẻ hình ䷈ thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:202, q:"Quẻ hình ䷉ thuộc hành nào?", type:"text", opts:["Kim","Thổ","Hỏa","Mộc"], ans:0 },
{ stt:203, q:"Quẻ hình ䷊ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Hỏa"], ans:0 },
{ stt:204, q:"Quẻ hình ䷋ thuộc hành nào?", type:"text", opts:["Kim","Thổ","Mộc","Thủy"], ans:0 },
{ stt:205, q:"Quẻ hình ䷌ thuộc hành nào?", type:"text", opts:["Kim","Hỏa","Thổ","Mộc"], ans:1 },
{ stt:206, q:"Quẻ hình ䷍ thuộc hành nào?", type:"text", opts:["Hỏa","Kim","Thủy","Thổ"], ans:0 },
{ stt:207, q:"Quẻ hình ䷎ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Mộc","Thủy"], ans:0 },
{ stt:208, q:"Quẻ hình ䷏ thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Thủy","Hỏa"], ans:0 },
{ stt:209, q:"Quẻ hình ䷐ thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:210, q:"Quẻ hình ䷑ thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Kim","Thủy"], ans:0 },
{ stt:211, q:"Quẻ hình ䷒ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Hỏa"], ans:0 },
{ stt:212, q:"Quẻ hình ䷓ thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Kim","Thủy"], ans:0 },
{ stt:213, q:"Quẻ hình ䷔ thuộc hành nào?", type:"text", opts:["Mộc","Hỏa","Thủy","Thổ"], ans:0 },
{ stt:214, q:"Quẻ hình ䷕ thuộc hành nào?", type:"text", opts:["Thổ","Hỏa","Kim","Mộc"], ans:0 },
{ stt:215, q:"Quẻ hình ䷖ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Hỏa"], ans:0 },
{ stt:216, q:"Quẻ hình ䷗ thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Thủy","Kim"], ans:0 },
{ stt:217, q:"Quẻ hình ䷘ thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thổ","Thủy"], ans:0 },
{ stt:218, q:"Quẻ hình ䷙ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Mộc","Thủy"], ans:0 },
{ stt:219, q:"Quẻ hình ䷚ thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Thủy","Hỏa"], ans:0 },
{ stt:220, q:"Quẻ hình ䷛ thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:221, q:"Quẻ hình ䷜ thuộc hành nào?", type:"text", opts:["Thủy","Hỏa","Thổ","Kim"], ans:0 },
{ stt:222, q:"Quẻ hình ䷝ thuộc hành nào?", type:"text", opts:["Hỏa","Thủy","Mộc","Thổ"], ans:0 },
{ stt:223, q:"Quẻ hình ䷞ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Mộc"], ans:0 },
{ stt:224, q:"Quẻ hình ䷟ thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Kim","Thổ"], ans:0 },
{ stt:225, q:"Quẻ hình ䷠ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Mộc"], ans:0 },
{ stt:226, q:"Quẻ hình ䷡ thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thổ","Thủy"], ans:0 },
{ stt:227, q:"Quẻ hình ䷢ thuộc hành nào?", type:"text", opts:["Thổ","Hỏa","Mộc","Kim"], ans:1 },
{ stt:228, q:"Quẻ hình ䷣ thuộc hành nào?", type:"text", opts:["Hỏa","Thổ","Thủy","Mộc"], ans:0 },
{ stt:229, q:"Quẻ hình ䷤ thuộc hành nào?", type:"text", opts:["Hỏa","Mộc","Thổ","Thủy"], ans:0 },
{ stt:230, q:"Quẻ hình ䷥ thuộc hành nào?", type:"text", opts:["Hỏa","Kim","Thủy","Thổ"], ans:0 },
{ stt:231, q:"Quẻ hình ䷦ thuộc hành nào?", type:"text", opts:["Thổ","Thủy","Mộc","Kim"], ans:0 },
{ stt:232, q:"Quẻ hình ䷧ thuộc hành nào?", type:"text", opts:["Thủy","Mộc","Thổ","Kim"], ans:0 },
{ stt:233, q:"Quẻ hình ䷨ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Mộc","Thủy"], ans:0 },
{ stt:234, q:"Quẻ hình ䷩ thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:235, q:"Quẻ hình ䷪ thuộc hành nào?", type:"text", opts:["Kim","Thổ","Mộc","Thủy"], ans:0 },
{ stt:236, q:"Quẻ hình ䷫ thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:237, q:"Quẻ hình ䷬ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Mộc","Thủy"], ans:0 },
{ stt:238, q:"Quẻ hình ䷭ thuộc hành nào?", type:"text", opts:["Mộc","Thổ","Thủy","Kim"], ans:0 },
{ stt:239, q:"Quẻ hình ䷮ thuộc hành nào?", type:"text", opts:["Thủy","Kim","Thổ","Mộc"], ans:0 },
{ stt:240, q:"Quẻ hình ䷯ thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Kim","Thổ"], ans:0 },
{ stt:241, q:"Quẻ hình ䷰ thuộc hành nào?", type:"text", opts:["Hỏa","Kim","Thổ","Thủy"], ans:0 },
{ stt:242, q:"Quẻ hình ䷱ thuộc hành nào?", type:"text", opts:["Mộc","Hỏa","Thổ","Thủy"], ans:0 },
{ stt:243, q:"Quẻ hình ䷲ thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:244, q:"Quẻ hình ䷳ thuộc hành nào?", type:"text", opts:["Thổ","Kim","Thủy","Mộc"], ans:0 },
{ stt:245, q:"Quẻ hình ䷴ thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Thủy","Kim"], ans:0 },
{ stt:246, q:"Quẻ hình ䷵ thuộc hành nào?", type:"text", opts:["Mộc","Kim","Thủy","Thổ"], ans:0 },
{ stt:247, q:"Quẻ hình ䷶ thuộc hành nào?", type:"text", opts:["Hỏa","Mộc","Thổ","Thủy"], ans:0 },
{ stt:248, q:"Quẻ hình ䷷ thuộc hành nào?", type:"text", opts:["Thổ","Hỏa","Mộc","Thủy"], ans:0 },
{ stt:249, q:"Quẻ hình ䷸ thuộc hành nào?", type:"text", opts:["Mộc","Thủy","Thổ","Kim"], ans:0 },
{ stt:250, q:"Quẻ hình ䷹ thuộc hành nào?", type:"text", opts:["Kim","Thổ","Thủy","Mộc"], ans:0 },
{ stt:251, q:"Quẻ hình ䷺ thuộc hành nào?", type:"text", opts:["Thủy","Mộc","Thổ","Kim"], ans:0 },
{ stt:252, q:"Quẻ hình ䷻ thuộc hành nào?", type:"text", opts:["Thủy","Kim","Thổ","Mộc"], ans:0 },
{ stt:253, q:"Quẻ hình ䷼ thuộc hành nào?", type:"text", opts:["Kim","Mộc","Thủy","Thổ"], ans:0 },
{ stt:254, q:"Quẻ hình ䷽ thuộc hành nào?", type:"text", opts:["Thổ","Mộc","Thủy","Kim"], ans:0 },
{ stt:255, q:"Quẻ hình ䷾ thuộc hành nào?", type:"text", opts:["Thủy","Hỏa","Thổ","Mộc"], ans:0 },
{ stt:256, q:"Quẻ hình ䷿ thuộc hành nào?", type:"text", opts:["Thủy","Hỏa","Thổ","Mộc"], ans:0 },

{stt:257, q:"Quẻ CÀN VI THIÊN có mấy hào dương, hào âm?", type:"text", opts:["3 hào âm - 3 hào dương","3 hào âm - 3 hào âm","3 hào dương - 3 hào âm","3 hào dương - 3 hào dương"], ans:3},
{stt:258, q:"Quẻ KHÔN VI ĐỊA có mấy hào dương, hào âm?", type:"text", opts:["3 hào âm - 3 hào dương","6 hào âm - 0 hào dương","3 hào dương - 3 hào âm","0 hào âm - 6 hào dương"], ans:1},
{stt:259, q:"Quẻ THỦY LÔI TRUÂN có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:260, q:"Quẻ SƠN THỦY MÔNG có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:261, q:"Quẻ THỦY THIÊN NHU có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:2},
{stt:262, q:"Quẻ THIÊN THỦY TỤNG có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","4 hào dương - 2 hào âm","2 hào dương - 4 hào âm","1 hào dương - 5 hào âm"], ans:1},
{stt:263, q:"Quẻ ĐỊA THỦY SƯ có mấy hào dương, hào âm?", type:"text", opts:["1 hào dương - 5 hào âm","2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","0 hào dương - 6 hào âm"], ans:0},
{stt:264, q:"Quẻ THỦY ĐỊA TỶ có mấy hào dương, hào âm?", type:"text", opts:["1 hào dương - 5 hào âm","5 hào dương - 1 hào âm","2 hào dương - 4 hào âm","3 hào dương - 3 hào âm"], ans:0},
{stt:265, q:"Quẻ PHONG THIÊN TIỂU SÚC có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:266, q:"Quẻ THIÊN TRẠCH LÝ có mấy hào dương, hào âm?", type:"text", opts:["5 hào dương - 1 hào âm","4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm"], ans:0},
{stt:267, q:"Quẻ ĐỊA THIÊN THÁI có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:268, q:"Quẻ THIÊN ĐỊA BĨ có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","4 hào dương - 2 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:269, q:"Quẻ THIÊN HỎA ĐỒNG NHÂN có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","5 hào dương - 1 hào âm","2 hào dương - 4 hào âm"], ans:0},
{stt:270, q:"Quẻ HỎA THIÊN ĐẠI HỮU có mấy hào dương, hào âm?", type:"text", opts:["5 hào dương - 1 hào âm","4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:271, q:"Quẻ ĐỊA SƠN KHIÊM có mấy hào dương, hào âm?", type:"text", opts:["1 hào dương - 5 hào âm","2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","0 hào dương - 6 hào âm"], ans:0},
{stt:272, q:"Quẻ LÔI ĐỊA DỰ có mấy hào dương, hào âm?", type:"text", opts:["1 hào dương - 5 hào âm","2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:273, q:"Quẻ TRẠCH LÔI TÙY có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:274, q:"Quẻ SƠN PHONG CỐ có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:275, q:"Quẻ ĐỊA TRẠCH LÂM có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","1 hào dương - 5 hào âm","3 hào dương - 3 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:276, q:"Quẻ PHONG ĐỊA QUÁN có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:277, q:"Quẻ HỎA LÔI PHỆ HẠP có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:278, q:"Quẻ SƠN HỎA BÍ có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:279, q:"Quẻ SƠN ĐỊA BÁC có mấy hào dương, hào âm?", type:"text", opts:["1 hào dương - 5 hào âm","2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","0 hào dương - 6 hào âm"], ans:0},
{stt:280, q:"Quẻ ĐỊA LÔI PHỤC có mấy hào dương, hào âm?", type:"text", opts:["1 hào dương - 5 hào âm","2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:281, q:"Quẻ THIÊN LÔI VÔ VỌNG có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:282, q:"Quẻ SƠN THIÊN ĐẠI SÚC có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:283, q:"Quẻ SƠN LÔI DI có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:284, q:"Quẻ TRẠCH PHONG ĐẠI QUÁ có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:285, q:"Quẻ KHẢM VI THỦY có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:286, q:"Quẻ LY VI HỎA có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:287, q:"Quẻ TRẠCH SƠN HÀM có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:288, q:"Quẻ LÔI PHONG HẰNG có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:289, q:"Quẻ THIÊN SƠN ĐỘN có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:290, q:"Quẻ LÔI THIÊN ĐẠI TRÁNG có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:291, q:"Quẻ HỎA ĐỊA TẤN có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:292, q:"Quẻ ĐỊA HỎA MINH DI có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:293, q:"Quẻ PHONG HỎA GIA NHÂN có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:294, q:"Quẻ HỎA TRẠCH KHUÊ có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:295, q:"Quẻ THỦY SƠN KIỂN có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","1 hào dương - 5 hào âm","3 hào dương - 3 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:296, q:"Quẻ LÔI THỦY GIẢI có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:297, q:"Quẻ SƠN TRẠCH TỔN có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:298, q:"Quẻ PHONG LÔI ÍCH có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:299, q:"Quẻ TRẠCH THIÊN QUẢI có mấy hào dương, hào âm?", type:"text", opts:["5 hào dương - 1 hào âm","4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm"], ans:0},
{stt:300, q:"Quẻ THIÊN PHONG CẤU có mấy hào dương, hào âm?", type:"text", opts:["5 hào dương - 1 hào âm","4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm"], ans:0},
{stt:301, q:"Quẻ TRẠCH ĐỊA TỤY có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","1 hào dương - 5 hào âm","3 hào dương - 3 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:302, q:"Quẻ ĐỊA PHONG THĂNG có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:303, q:"Quẻ TRẠCH THỦY KHỐN có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:304, q:"Quẻ THỦY PHONG TỈNH có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:305, q:"Quẻ TRẠCH HỎA CÁCH có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:306, q:"Quẻ HỎA PHONG ĐỈNH có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:307, q:"Quẻ CHẤN VI LÔI có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","1 hào dương - 5 hào âm","3 hào dương - 3 hào âm","0 hào dương - 6 hào âm"], ans:1},
{stt:308, q:"Quẻ CẤN VI SƠN có mấy hào dương, hào âm?", type:"text", opts:["1 hào dương - 5 hào âm","2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:309, q:"Quẻ PHONG SƠN TIỆM có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:310, q:"Quẻ LÔI TRẠCH QUY MUỘI có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:311, q:"Quẻ LÔI HỎA PHONG có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:312, q:"Quẻ HỎA SƠN LỮ có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:313, q:"Quẻ TỐN VI PHONG có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:314, q:"Quẻ ĐOÀI VI TRẠCH có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:315, q:"Quẻ PHONG THỦY HOÁN có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:316, q:"Quẻ THỦY TRẠCH TIẾT có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:317, q:"Quẻ PHONG TRẠCH TRUNG PHÙ có mấy hào dương, hào âm?", type:"text", opts:["4 hào dương - 2 hào âm","3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","5 hào dương - 1 hào âm"], ans:0},
{stt:318, q:"Quẻ LÔI SƠN TIỂU QUÁ có mấy hào dương, hào âm?", type:"text", opts:["2 hào dương - 4 hào âm","3 hào dương - 3 hào âm","1 hào dương - 5 hào âm","4 hào dương - 2 hào âm"], ans:0},
{stt:319, q:"Quẻ THỦY HỎA KÝ TẾ có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0},
{stt:320, q:"Quẻ HỎA THỦY VỊ TẾ có mấy hào dương, hào âm?", type:"text", opts:["3 hào dương - 3 hào âm","2 hào dương - 4 hào âm","4 hào dương - 2 hào âm","1 hào dương - 5 hào âm"], ans:0}

  // ✅ THÊM CÂU MỚI Ở ĐÂY - CHỈ VIẾT 1 DÒNG LÀ XONG!
  // Ví dụ: {q:"Câu hỏi số 18...", type:"text/hex", opts:["...","...","...","..."], ans:0},
];

