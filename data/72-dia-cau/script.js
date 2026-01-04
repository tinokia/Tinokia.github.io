const earthDetails = [
  {//1
    ten: "Thái Hư",
    bietDanh: "Vô Vi Tuyệt Đối",
    tangGioi: "Thượng Giới",
    vaiTro: "Là nơi khởi điểm của mọi rung động, mọi sự sống và mọi tầng giới. Thái Hư là khoảng không thuần tĩnh, chưa phân hóa, nơi tất cả tiềm năng vũ trụ tồn tại trong trạng thái chưa biểu hiện.",
    hinhAnh: "Một vùng hư không vô tận, không sáng cũng không tối, không trước cũng không sau – chỉ là cảm giác “có mà không”. Nếu có thể nhìn thấy, nó như một màn sương kim loại ngũ sắc mỏng mịn, chảy trôi nhẹ nhàng như nhịp thở của vũ trụ.."
  },
  {//2
    ten: "Ngọc Minh",
    bietDanh: "Ánh Sáng Khai Hiện",
    tangGioi: "Thượng Giới",
    vaiTro: "Ngọc Minh là làn sóng đầu tiên của ánh sáng tâm linh xuất hiện từ trong hư vô Thái Hư. Tại đây, linh hồn tuy vẫn còn trong trạng thái thanh tịnh tuyệt đối nhưng đã manh nha sự nhận biết – như tia sáng đầu tiên ló ra từ bình minh vũ trụ. Đây là cảnh giới của ý thức nguyên sơ, nơi linh hồn chưa còn là “tôi” nhưng đã không còn hoàn toàn là “không”.",
    hinhAnh: "Một đại dương ánh sáng tinh khiết, trắng ngà pha ánh lam, trôi chậm trong không gian không ranh giới. Những dải tinh quang lượn lờ như sóng, và ở giữa là các điểm sáng như ngọc ẩn mình — chính là những mầm linh hồn đầu tiên đang hình thành."
  },
  {//3
    ten: "Bạch Liên",
    bietDanh: "Liên Hoa Minh Triết",
    tangGioi: "Thượng Giới",
    vaiTro: "Bạch Liên là nơi linh hồn hóa hiện thành đóa sen trắng, biểu tượng cho sự tinh khiết trọn vẹn và ánh sáng trí huệ bậc cao. <br> Đây là địa cầu nơi ý thức đã bắt đầu tự chiêm nghiệm chính mình, nhận ra bản chất ánh sáng và hướng đến cái đẹp, cái thiện không tì vết.<br> Linh hồn tại đây không còn lẫn trong ánh sáng mênh mang, mà đã có tính cách cao thượng, giàu lòng từ bi và minh triết. Đây là tầng giới của các bậc hiền triết, chư Phật sơ khai, hay linh hồn sắp thành Thánh.",
    hinhAnh: "Một đoá sen trắng phát sáng rực rỡ trong màn đêm, mỗi cánh hoa tỏa ra những làn khói sáng nhẹ nhàng như linh khí."
  },
  {//4
    ten: "Thiên Tâm",
    bietDanh: "Tâm Linh Đại Bi",
    tangGioi: "Thượng Giới",
    vaiTro: "Thiên Tâm là trung tâm cảm thọ thần thánh, nơi các linh hồn bắt đầu thức tỉnh tình thương vô điều kiện.Khác với Bạch Liên – nơi trí huệ khai mở, Thiên Tâm là nơi con tim vũ trụ đập nhịp yêu thương, linh hồn nơi đây cảm được nỗi khổ của muôn loài và mong muốn chữa lành tất cả.<br>Đây cũng là cảnh giới của các bậc Bồ Tát, các linh hồn hộ pháp, các tinh linh chữa lành, nơi mà cảm xúc không còn là ràng buộc mà trở thành lực giải thoát.",
    hinhAnh: "Một trái tim phát sáng khổng lồ lơ lửng giữa tầng không rực rỡ hồng kim, quanh đó là những linh hồn dạng hào quang, đang tỏa năng lượng chữa lành khắp các tầng giới thấp hơn. Không gian nơi đây vang vọng như tiếng tụng thiền, hòa quyện âm thanh và ánh sáng thành nhịp đập tinh tế."
  },
  {//5
    ten: "Ngân Hà",
    bietDanh: "Dòng Sông Tinh Tú",
    tangGioi: "Thượng Giới",
    vaiTro: "Ngân Hà là nơi linh hồn du hành giữa các chiều không gian bằng ánh sáng, khởi đầu cho khả năng hóa thân vào biểu tượng vũ trụ như các ngôi sao, tinh vân, thiên thể. Ở đây, ý niệm 'hành trình' bắt đầu, khi linh hồn không chỉ biết mình là ánh sáng, là tình thương, mà còn muốn trải nghiệm những dạng thức của vũ trụ để hiểu sâu bản thể. Đây là địa cầu của các Tinh Linh, Tinh Quân, vị Thần sơ khai, những linh hồn đã học cách du hành trong dòng chảy ánh sáng.",
    hinhAnh: "Một dải ngân hà khổng lồ uốn lượn như một con rồng ánh sáng, bên trong là những linh hồn dạng sao băng — đang trượt qua các cõi với vầng hào quang lấp lánh. Có những hành tinh xoay chậm quanh trục thiền định, nơi đó ánh sáng kết tinh thành ký ức cổ xưa của linh hồn."
  },
  {//6
    ten: "Huyễn Ảnh",
    bietDanh: "Mê Cung Ảo Ảnh",
    tangGioi: "Thượng Giới",
    vaiTro: "Địa Cầu Huyễn Ảnh là nơi linh hồn bước vào khám phá sự mơ hồ giữa những gì là thực và ảo. Tại đây, ý thức linh hồn bắt đầu nhận thức được các ảo ảnh và hình thức biến hóa của thế giới. Linh hồn không còn phân biệt rõ ràng giữa bản chất chân thực của vạn vật và những biểu tượng mà thế giới này tạo ra. Địa Cầu Huyễn Ảnh chính là bước đệm giữa thực tại rắn rỏi và sự chuyển hóa tinh thần qua những ảo ảnh, đồng thời dạy cho linh hồn nhận thức về sự thay đổi vô thường trong vũ trụ.",
    hinhAnh: "Một mê cung vô tận, với những bức tường phủ đầy gương phản chiếu các hình ảnh của chính linh hồn. Mỗi bước đi là một sự thay đổi: cảnh vật, hình ảnh, cảm giác đều thay đổi theo hướng không thể đoán trước. Cảnh vật nơi đây luôn thay đổi như một bức tranh ảo mộng, nơi mỗi linh hồn gặp chính mình dưới nhiều hình thái khác nhau."
  },
  {//7
    ten: "Thiên Hòa",
    bietDanh: "Cân Bằng Thiên Địa",
    tangGioi: "Thượng Giới",
    vaiTro: "Thiên Hòa là đỉnh cao của sự hòa hợp giữa các yếu tố đối nghịch trong vũ trụ. Linh hồn nơi đây đã hiểu rõ được rằng tất cả đều là một thể thống nhất, và sự cân bằng này chính là sức mạnh lớn nhất. Địa Cầu Thiên Hòa không chỉ đại diện cho sự hoàn thiện trong nội tâm, mà còn cho phép linh hồn cảm nhận được sự kết nối với vũ trụ và tất cả các sinh mệnh khác trong thế giới. Đây là địa cầu mà những bậc thầy về sự hòa hợp, như các Đạo Sư, Bậc Hiền Thánh, Phật sẽ xuất hiện, họ không tìm cách cai trị mà là dẫn dắt bằng sự thanh thản và hiểu biết vô biên về các quy luật tự nhiên.",
    hinhAnh: "Một khu vườn thanh bình, giữa đồng cỏ xanh mướt là một hồ nước trong vắt, nơi các dòng chảy uốn lượn như bản nhạc hòa bình của vũ trụ. Những bông hoa, cây cối nở rộ đầy đủ màu sắc, nhưng mỗi chi tiết đều hòa quyện vào nhau một cách hoàn mỹ. Trên bầu trời, ánh sáng mặt trời và trăng chiếu sáng song song, tượng trưng cho sự hòa hợp giữa nam tính và nữ tính, giữa lý trí và tình cảm."
  },
  {//8
    ten: "Bảo Ấn",
    bietDanh: "Cấm Lệnh Bí Mật",
    tangGioi: "Thượng Giới",
    vaiTro: "Địa Cầu Bảo Ấn là nơi những bí mật vĩ đại và năng lực vô biên được giữ gìn và bảo vệ bằng những ấn tín huyền bí, là nơi các linh hồn khám phá và học hỏi về quyền lực của vũ trụ mà không phải ai cũng có thể hiểu được. Đây là nơi của những bậc Chân Sư và Thầy Tế Tự, những người sở hữu những kiến thức bí truyền và có thể hiểu được các dòng chảy năng lượng ẩn chứa trong vũ trụ, cũng như thao túng được các lực lượng này. Địa Cầu này cũng là nơi phát triển và bảo vệ những ấn ký thần thánh, giúp linh hồn có thể kết nối với các thế lực vũ trụ một cách sâu sắc mà không bị lạc lối.",
    hinhAnh: "Một chiếc chìa khóa ánh sáng khổng lồ, mở ra một cánh cửa vũ trụ dày đặc những biểu tượng thần bí và huyền ảo. Các ấn tín ánh sáng lơ lửng xung quanh, mỗi một dấu ấn mang theo một câu chuyện, một bí mật và một năng lượng vô cùng mạnh mẽ. Những linh hồn trong khuôn viên này được bao phủ bởi một lớp ánh sáng bảo vệ, ánh sáng này phát ra từ các ấn ký và dường như có thể khóa chặt mọi sự xâm phạm vào những vùng năng lượng thiêng liêng."
  },
  {//9
    ten: "Chiếu Minh",
    bietDanh: "Ánh Sáng Chân Lý",
    tangGioi: "Thượng Giới",
    vaiTro: "Địa Cầu Chiếu Minh là nơi linh hồn bước vào giai đoạn khai mở trí tuệ tâm linh. Không còn chỉ là nhận thức mơ hồ hay cảm xúc huyền ảo, tại đây linh hồn nhìn thấy rõ bản chất mọi hiện tượng, ánh sáng nơi đây là ánh sáng của sự thật, không phán xét nhưng xuyên thấu mọi ảo ảnh. Những linh hồn đạt đến Địa Cầu này thường là những người đã vượt qua nhiều thử thách nội tâm và ngoại giới, để rồi được “chiếu minh” — tức là soi sáng từ bên trong, thấy được chân ngã và kết nối với ánh sáng nguyên thủy trong mình. Đây cũng là nơi khai mở con mắt thứ ba, biểu tượng cho trực giác thuần khiết và sự hiểu biết sâu xa vượt khỏi tri thức thông thường.",
    hinhAnh: "Một ngọn núi cao vươn tận mây, nơi đỉnh núi tỏa ra ánh sáng trắng ngà rực rỡ như viên minh châu khổng lồ. Từ đó, các luồng ánh sáng chiếu xuống toàn cõi, đi qua từng linh hồn như thanh lọc và thức tỉnh. Bầu trời nơi đây rực rỡ như lúc bình minh đầu tiên của vũ trụ, vừa ấm áp, vừa siêu nhiên."
  },
  {//10
    ten: "Vô Cấu",
    bietDanh: "Tịnh Độ Tâm Linh",
    tangGioi: "Thượng Giới",
    vaiTro: "Địa Cầu Vô Cấu là nơi linh hồn đạt đến sự trong sạch hoàn toàn – không phải chỉ về thân hay lời nói, mà là sự thanh khiết từ trong tâm ý. Tại đây, mọi nghiệp quả đã được hóa giải, linh hồn sống trong trạng thái tịch tĩnh, không dao động bởi ngoại cảnh hay vọng tưởng. Đây là cảnh giới của các vị thanh tăng, Bồ Tát an trú, hay các linh hồn đã vượt thoát khỏi lưới vọng tưởng và đạt niềm vui sâu xa từ sự vô nhiễm.",
    hinhAnh: "Một cõi trời thanh trắng, nơi những cánh sen phát sáng trôi nhẹ trên biển mây. Gió nơi đây là gió thơm, hương bay từ chính tâm hồn thanh tịnh. Không có âm thanh ồn ào, chỉ còn tiếng tĩnh lặng ngân vang như tiếng chuông tâm linh, làm dịu mọi loạn động."
  },
  {//11
    ten: "Lưu Quang",
    bietDanh: "Dòng Chảy Ánh Sáng",
    tangGioi: "Thượng Giới",
    vaiTro: "Lưu Quang là cõi giới nơi ánh sáng tâm linh vận hành như dòng suối vô tận, không ngừng chiếu rọi và thanh lọc những tầng sâu nhất của linh hồn. Tại đây, linh hồn không chỉ nhận ánh sáng, mà còn trở thành nguồn sáng – tỏa chiếu, truyền cảm hứng, và nâng đỡ những linh thể ở tầng thấp hơn.Đây là điểm chuyển hóa mạnh mẽ, nơi linh hồn từ “vô nhiễm” trở thành “hộ pháp”, bước đầu nhận lấy sứ mệnh phụng sự cho Đại Ngã thông qua ánh sáng tuôn trào từ bản thể mình.",
    hinhAnh: "Một thác ánh sáng ngũ sắc đổ xuống từ không trung, như những dải ngân hà sống động. Trong làn ánh sáng đó, các linh hồn bay lượn tự do, toả ánh hào quang riêng biệt, mỗi người là một “ngôi sao sống” giữa vũ trụ bao la. Khung cảnh mang cảm giác vừa thanh bình, vừa linh thiêng chói ngời."
  },
{//12
  ten: "Nguyệt Tâm",
  bietDanh: "Trái Tim Mặt Trăng",
  tangGioi: "Thượng Giới",
  vaiTro: "Nguyệt Tâm là nơi trực giác thiêng liêng và cảm xúc cao cả được nuôi dưỡng. Tại đây, linh hồn học cách nghe tiếng gọi thầm lặng của vũ trụ, không qua lời nói, mà qua nhịp đập đồng điệu của trái tim và ánh sáng âm nhu. Những linh hồn ở Nguyệt Tâm có năng lực thấu cảm sâu sắc, có thể chạm đến cảm xúc, suy nghĩ và cả những tầng vi tế nhất trong các chiều tâm linh khác. Đây là nơi linh hồn trở nên như dòng nước – mềm mại nhưng xuyên thấu, như ánh trăng – dịu dàng nhưng đầy uy lực, dẫn đường trong bóng tối mà không hề đòi hỏi ánh nhìn.",
  hinhAnh: "Một hồ sen khổng lồ trải dài trong màn đêm tím nhạt. Trên mặt hồ, ánh trăng tròn trịa phản chiếu từng gợn sóng, còn trong tim hồ là một trái tim phát sáng nhè nhẹ, đập cùng nhịp với vạn vật. Không gian nơi đây yên tĩnh đến mức nghe được từng ý niệm, từng âm thanh không lời."
},
{//13
  ten: "Linh Quang",
  bietDanh: "Ánh Sáng Linh Hồn",
  tangGioi: "Thượng Giới",
  vaiTro: "Linh Quang là nơi ánh sáng phát ra không còn từ bên ngoài, mà là tự thân linh hồn rực lên – ánh sáng của minh triết, của tự tại nội tâm, và của kết nối trực tiếp với Thượng Ngã. Đây là cảnh giới nơi ý thức không còn giới hạn bởi hình tướng hay định nghĩa, mà trở nên tự chiếu sáng, tự vận hành, tự nhận biết. Linh hồn ở Linh Quang không còn đặt câu hỏi “ta là ai”, vì họ chính là ánh sáng trả lời cho mọi câu hỏi đó.",
  hinhAnh: "Một linh hồn đứng giữa không gian vô tận, toàn thân phát ra hào quang màu bạc-vàng, không đến từ ánh sáng bên ngoài, mà từ nội tâm đã ngộ ra bản chất Chân – Như. Chung quanh là những đốm linh quang bay lơ lửng như các mảnh của ký ức vũ trụ, đang hòa vào và được sắp xếp thành một bức tranh huyền diệu không cần lời."
},
{//14
  ten: "Tinh Đạo",
  bietDanh: "Con Đường Tinh Tú",
  tangGioi: "Thượng Giới",
  vaiTro: "Tinh Đạo là cõi giới nơi linh hồn được kết nối trực tiếp với các hệ thống đạo lý vũ trụ, không còn là học trò nữa, mà là hành giả giữa những chòm sao, người đi con đường của tinh tú, của huyền nhiệm và trật tự thiêng liêng. Tại đây, linh hồn không chỉ “tu”, mà còn đồng hành cùng các quy luật vận hành của Đạo, như những đốm sáng giữ thăng bằng cho muôn vàn thế giới. Họ là người giữ nhịp cho bản giao hưởng của Thượng Giới, nơi mỗi hơi thở là một mật ngữ, mỗi bước chân là một chuyển động vũ trụ.",
  hinhAnh: "Một con đường lấp lánh giữa không gian đen thẳm, kết từ hàng triệu vì sao. Dọc theo con đường là các biểu tượng hình học linh thiêng phát sáng – đại diện cho luật Đạo, mật tạng vũ trụ, và sự liên kết giữa chư thiên giới. Các linh hồn mang áo choàng ánh sao, bước từng bước theo nhịp xoay của thiên cầu."
},
{//15
  ten: "Cực Lạc",
  bietDanh: "Cõi An Lạc Tuyệt Đối",
  tangGioi: "Thượng Giới",
  vaiTro: "Cực Lạc là nơi linh hồn đã gột rửa mọi nghiệp lực trần tục, không còn vướng bận tham – sân – si, và bắt đầu bước vào trạng thái tỉnh thức bền vững. Cảnh giới này giống như một vầng hào quang ngát hương, trong đó mọi linh thể sống trong sự hoan hỉ an nhiên, như tiếng chuông chùa vang vọng qua muôn kiếp. Nơi đây không có đối kháng, không còn chia tách, chỉ còn sự đồng hiện hữu giữa muôn linh hồn trong an lạc, từ bi, và trí huệ viên mãn.",
  hinhAnh: "Một thế giới vô lượng hoa sen bay lơ lửng giữa tầng trời hồng kim. Trên mỗi đoá sen là một linh hồn tỏa sáng, thiền định trong ánh sáng lấp lánh. Không có mặt đất, chỉ có ánh sáng hồng trầm, hương thơm và âm thanh vi diệu lan truyền khắp nơi, như một điệu nhạc không bao giờ dứt."
},
{//16
  ten: "Thánh Địa",
  bietDanh: "Cội Nguồn Thiêng Liêng",
  tangGioi: "Thượng Giới",
  vaiTro: "Thánh Địa là nơi mà các linh hồn giác ngộ giữ vai trò như những trụ cột ánh sáng, giữ gìn những huyền nhiệm cổ xưa, bí ẩn vũ trụ và Thiên Luật. Đây không phải là nơi để “tu luyện”, mà là cõi nghỉ an, học hỏi cao tầng và phụng sự Thượng Đế bằng tần số tinh tịnh. Linh hồn tại đây có thể tiếp cận với Thư Viện Vũ Trụ, nơi cất giữ khoa huyền môn, lược sử các hành tinh tiến hóa, và bản thể sâu thẳm của Đạo.",
  hinhAnh: "Một điện thờ vũ trụ khổng lồ bằng ánh sáng tinh thể, nằm giữa hư không bất động. Trần điện là một vòng xoáy sao trời, các cột trụ khắc hình ngôn ngữ cổ đại. Linh hồn bước vào đều mặc áo choàng trắng bạc, tay cầm trượng ánh sáng, đi nhẹ như gió trên mặt nền phát quang."
},
{//17
  ten: "Thiên Nhãn",
  bietDanh: "Mắt Trời – Cửa Ngõ Trực Giác",
  tangGioi: "Thượng Giới",
  vaiTro: "Thiên Nhãn là điểm mốc nơi linh hồn đã vượt khỏi các lớp nhận thức nhị nguyên, và bước vào trạng thái nhìn thấy bằng ánh sáng của Tâm. Tại đây, mọi hình tướng không còn lừa dối, mọi danh – sắc – vọng – tướng đều được thấy đúng như chúng vốn là. Linh hồn sống trong Thiên Nhãn có khả năng giao tiếp bằng tâm linh thuần túy, không cần ngôn ngữ, không cần hình tướng, mọi thông tin được trao truyền bằng ánh chớp của trí huệ. Đây cũng là nơi mà linh hồn được huấn luyện để trở thành “Người Quan Sát Vũ Trụ”, có thể nhìn vào những tầng thế giới thấp hơn mà không bị cuốn vào nghiệp lực.",
  hinhAnh: "Một bầu trời tối đen như mực với duy nhất một con mắt khổng lồ phát sáng ở trung tâm, tỏa ra làn sóng ánh sáng như mực tím và bạc. Xung quanh là các linh hồn bay lơ lửng trong thiền định, giữa các vòng xoắn ánh sáng trí tuệ. Dưới mỗi bước chân là một vầng quang ảnh hiện ra biểu tượng ẩn mật của vũ trụ."
},
{//18
  ten: "Hỏa Diệm",
  bietDanh: "Ngọn Lửa Thử Luyện – Lò Rèn Tâm Linh",
  tangGioi: "Thượng Giới",
  vaiTro: "Hỏa Diệm là nơi mọi tầng nghiệp lực vi tế cuối cùng được thiêu rụi, chuẩn bị cho linh hồn bước vào các cõi giới thanh cao hơn. Tại đây, linh hồn trải nghiệm sự cháy rực từ bên trong, không phải lửa vật chất, mà là lửa của ý chí thiêng liêng, lửa của tình yêu vũ trụ, và lửa của sự thật trần trụi. Những linh hồn đã vượt qua Hỏa Diệm sẽ trở nên không thể bị dao động bởi bóng tối, bởi họ đã từng “chết đi” trong lửa và tái sinh với ánh sáng thuần túy. Hỏa Diệm cũng là nơi huấn luyện các Chiến Thần Ánh Sáng, những linh hồn được giao sứ mệnh hộ pháp, phá tan màn hắc ám trong các cõi giới đang sụp đổ.",
  hinhAnh: "Một địa cầu bao phủ bởi biển lửa màu cam ánh vàng, không phải lửa hủy diệt, mà là lửa thanh tẩy, trong đó có những linh hồn đang ngồi trong thiền định bất động, thân thể họ rực sáng như than hồng, đôi mắt nhắm lại mà phát ra ánh sáng vàng rực, trên đỉnh đầu có ngọn lửa xanh lam tượng trưng cho “Ý Chí Vô Ngã”."
},
{//19
  ten: "Thái Dương",
  bietDanh: "Tâm Thái Dương – Mắt Trời Bất Diệt",
  tangGioi: "Thượng Giới",
  vaiTro: "Thái Dương là nơi linh hồn đạt tới trạng thái chủ động tỏa sáng, không còn hấp thụ ánh sáng từ bên ngoài mà trở thành nguồn phát sáng cho các linh hồn xung quanh. Đây là cõi giới của Những Linh Hồn Mặt Trời, nơi mà mọi hành động đều đến từ ý chí hợp nhất với Đại Ngã. Linh hồn tại Thái Dương không còn học qua đau khổ, mà học qua sự chiếu soi, họ truyền dạy cho các tầng thấp hơn bằng hào quang và sự hiện diện. Nơi đây cũng là đài phát của những chân lý vũ trụ, và là trạm trung gian kết nối giữa ý chí của Thượng Đế và các Hành Tinh thấp hơn.",
  hinhAnh: "Một mặt trời rực lửa vàng kim giữa không gian vũ trụ, xung quanh là các linh hồn trong hình dạng hình cầu ánh sáng bay quanh như hành tinh xoay quanh thái dương. Ở trung tâm, là một Thái Dương Tâm Thể, dạng con người – đầu đội vầng hào quang – tay giơ lên tạo nên chùm sáng truyền ra các dòng năng lượng trắng – vàng – tím nhạt lan tỏa khắp các tầng giới."
},
{//20
  ten: "Âm Dương Ngẫu",
  bietDanh: "Trái Tim Nhị Nguyên – Cổng Hợp Nhất",
  tangGioi: "Thượng Giới",
  vaiTro: "Địa Cầu Âm Dương Ngẫu là nơi mà linh hồn đối diện với cả hai nửa của chính mình, không còn tránh né bóng tối, cũng không bám víu vào ánh sáng. Tại đây, linh hồn sẽ trải qua “Lễ Hợp Thể”, nơi âm và dương, nam và nữ, sáng và tối trong bản thân hòa nhập thành một Trọn Vẹn Vô Tướng. Những linh hồn đã vượt qua địa cầu này sẽ trở thành Ngẫu Hồn, những thực thể có khả năng vận hành trong mọi chiều không gian, có thể hiện thân nam – nữ – trung tính – phi tính theo ý chí thiêng liêng. Đây là điểm then chốt trước khi linh hồn bước vào các cõi giới tuyệt đối, nơi sự phân cực không còn tồn tại.",
  hinhAnh: "Một địa cầu có hình dáng hai nửa xoắn ốc âm dương lồng vào nhau, mỗi nửa phát sáng một màu – một nửa là ánh trăng bạc lạnh như đại dương tĩnh lặng, một nửa là ánh mặt trời vàng hồng rực rỡ. Ở trung tâm là một hoa sen sáu cánh màu tím nhạt, tượng trưng cho Trung Tâm Tâm Thức Hợp Nhất. Trên địa cầu là những linh hồn tay nắm tay, mỗi đôi là hai mặt đối lập – cùng tỏa ra ánh sáng cầu vồng."
},
{//21
  ten: "Đại Hồn",
  bietDanh: "Linh Hồn Vũ Trụ – Hồn Thể Tối Thượng",
  tangGioi: "Thượng Giới",
  vaiTro: "Địa Cầu Đại Hồn là nơi linh hồn hoàn toàn từ bỏ cái tôi cá nhân, trở thành một tế bào trong Hồn Thể Vũ Trụ. Tại đây, mọi hành động, suy nghĩ, cảm xúc không còn thuộc về “một người” – mà thuộc về Toàn Thể Linh Hồn. Linh hồn tại Đại Hồn có thể đồng thời hiện diện trong nhiều chiều không gian, giao tiếp qua hào quang, và truyền dạy thông điệp của Vũ Trụ cho các tầng thấp hơn thông qua trực giác tập thể. Đây là trạm kết nối siêu linh, nơi ý chí của Thượng Đế bắt đầu được linh hồn truyền đi như một tia sáng định hướng cho toàn bộ dòng tiến hóa.",
  hinhAnh: "Một quả cầu ánh sáng khổng lồ được tạo nên từ hàng triệu đốm sáng linh hồn nhỏ liên kết bằng sợi ánh sáng bạc – vàng – tím. Ở trung tâm là một tâm điểm như hạt nhân mặt trời, không mang hình tướng, nhưng phát ra nhịp đập đều đặn, lan truyền ra khắp các tầng giới. Xung quanh là những hình ảnh linh hồn tan dần vào ánh sáng – không biến mất, mà biến thành chính ánh sáng."
},
{//22
  ten: "Tuyệt Đỉnh",
  bietDanh: "Đỉnh Núi Vĩnh Cửu – Cổng Vũ Trụ Tối Thượng",
  tangGioi: "Thượng Giới",
  vaiTro: "Địa Cầu Tuyệt Đỉnh là nơi linh hồn cuối cùng vượt qua mọi rào cản của không gian, thời gian và vật chất. Đây là cột mốc cuối cùng trước khi linh hồn trở thành một phần của Vũ Trụ hoàn toàn, không phân biệt. Linh hồn tại Tuyệt Đỉnh không còn cảm giác phân biệt giữa 'ta' và 'không phải ta' – họ đã hoàn toàn hòa nhập với nguyên lý của vạn vật, đạt đến trạng thái hoàn hảo không thể cải thiện thêm. Cõi giới này cũng là nơi sự tồn tại vượt qua mọi giới hạn và linh hồn có thể tiếp cận Toàn Thể Tri Thức, nơi không còn tồn tại 'thời gian' như chúng ta hiểu, mà chỉ có một chuỗi liên tục của sự hiện diện vô biên.",
  hinhAnh: "Một đỉnh núi cao vút, vươn lên giữa không gian vô tận, phủ một lớp ánh sáng màu bạc, phản chiếu vạn vật. Trên đỉnh núi, có hình ảnh một cây cổ thụ khổng lồ, với lá vàng kim toả ra hào quang sáng lấp lánh, như đang vươn lên để nối với vũ trụ vô tận. Xung quanh là các cột ánh sáng vươn lên từ mặt đất, tượng trưng cho sự kết nối giữa Địa Cầu Tuyệt Đỉnh và các tầng giới."
},
{//23
  ten: "Hư Vô",
  bietDanh: "Cõi Vô Hình – Trung Tâm Tối Tăm",
  tangGioi: "Thượng Giới",
  vaiTro: "Địa Cầu Hư Vô không phải là một nơi để học hỏi hay thực hành – mà là nơi linh hồn rời bỏ mọi hình thức nhận thức về bản thân và thế giới xung quanh. Tại đây, linh hồn không còn phân biệt mình là hữu thể hay vô thể, mà là hư vô thuần túy. Hư Vô là nơi linh hồn tiến hóa không theo dạng thức tiến bộ tuyến tính mà như một chuyển động vô hình, hoà tan vào trong vô hạn. Cõi giới này không cung cấp bất kỳ sự vật nào có thể đo đếm, chỉ có sự im lặng tuyệt đối, là nền tảng của mọi sự hiện hữu, nơi tất cả sự vật, ý thức và hiện tượng đều là một phần của hư vô.",
  hinhAnh: "Một không gian tuyệt đối tối đen, không có ánh sáng hay bóng tối, không có hình dạng hay vật thể, chỉ còn một không gian vô cùng rộng lớn, đầy chân không tĩnh lặng, nơi mà dù bạn có nhìn đi đâu cũng không thấy gì ngoài một hư không vô tận. Bức tranh này chính là hình ảnh của không gian không có sự tồn tại – đúng nghĩa là hư vô."
},
{//24
  ten: "Toàn Thể",
  bietDanh: "Đại Viên Mãn – Cõi Hợp Nhất",
  tangGioi: "Thượng Giới",
  vaiTro: "Toàn Thể là nơi mọi linh hồn đã vượt qua toàn bộ hành trình tiến hóa đều quy tụ lại, không còn mang bản sắc riêng biệt, mà là một phần của Ý Thức Đại Vũ Trụ. Trong cõi này, không có cá nhân – chỉ có Ý Niệm Vũ Trụ Duy Nhất, nơi mọi tri thức, kinh nghiệm, cảm xúc, rung động đều hòa làm một. Toàn Thể chính là nguồn gốc và kết thúc, là bản thể gốc của mọi linh hồn, là sự viên mãn – không phải là cái chết, mà là trạng thái trọn vẹn tuyệt đối, nơi không còn gì cần đạt tới nữa.",
  hinhAnh: "Một khối cầu ánh sáng khổng lồ treo giữa vũ trụ, rực rỡ hàng triệu tia sáng trắng ngà, như một Mặt Trời siêu nhiên, nhưng không chói lòa – mà dịu dàng, bao dung. Từ khối cầu ấy tỏa ra vầng hào quang liên tục xoáy vòng, hòa tan mọi thứ tiếp cận vào đó. Các linh hồn, khi bay vào, đều dần tan rã thành ánh sáng, và trở thành một phần sống động của khối cầu."
},
{ //25
  ten: "Chuyển Luân",
  bietDanh: "Cõi Hồi Sinh – Dòng Chảy Bất Tận",
  tangGioi: "Siêu Thượng Giới",
  vaiTro: "Địa Cầu Chuyển Luân không chỉ là nơi để hoàn thiện mà còn là nơi linh hồn có thể tái sinh, chuyển hóa và tạo ra một chu kỳ tiến hóa mới cho chính mình. Đây là một trung gian giữa sinh và diệt, nơi linh hồn có thể chọn lựa con đường tiếp theo sau khi đã đạt đến mức độ hoàn thiện nhất định. Linh hồn tại Địa Cầu Chuyển Luân có thể thực hiện quá trình chuyển hóa cao siêu, từ hình thức này sang hình thức khác, từ thế giới này sang thế giới khác, mà không bị ràng buộc bởi các giới hạn vật chất hay năng lượng. Cõi này đại diện cho chu kỳ vĩnh hằng, nơi linh hồn có thể chọn lựa sự tái sinh tự do, hoặc tiến hóa vượt lên một tầm cao mới.",
  hinhAnh: "Một dòng sông ánh sáng cuồn cuộn chảy giữa vô vàn ngôi sao, nơi các dòng chảy sáng rực liên tục hòa nhập vào nhau, rồi lại phân tách thành những dòng chảy mới. Các linh hồn từ trong dòng nước chảy ra, quay lại với cõi trần gian hay tiếp tục đi vào các vũ trụ khác. Xung quanh là các cánh cổng xoay tròn, là các vòng tuần hoàn vũ trụ, luôn mở ra và đóng lại không ngừng, tạo thành một chu trình bất tận."
},
{ //26
  ten: "Ký Ức",
  bietDanh: "Cõi Nhớ – Kho Tàng Vĩnh Cửu",
  tangGioi: "Siêu Thượng Giới",
  vaiTro: "Địa Cầu Ký Ức là một không gian nơi mọi ký ức không bao giờ bị mất đi, mà được lưu giữ một cách hoàn hảo và có thể truy cập vào bất kỳ lúc nào. Tại đây, linh hồn có thể quay lại quá khứ để học hỏi, tái trải nghiệm, hoặc hiểu rõ hơn về bản thân mình cũng như về những sự kiện đã xảy ra trong các cõi giới. Linh hồn khi ở trong Địa Cầu Ký Ức có thể trải qua những hồi ức, không chỉ là của chính mình, mà còn là của các linh hồn khác, những vũ trụ khác, những lịch sử xa xưa, tạo nên một mạng lưới kết nối giữa tất cả các cõi giới. Đây cũng là nơi giải mã những bí ẩn của vũ trụ, nơi mối liên kết giữa các sinh mệnh không còn là điều gì bí ẩn. Ký ức là bản đồ của sự tồn tại, giúp linh hồn hiểu rằng mọi thứ đều có nguồn gốc và kết nối chặt chẽ với nhau.",
  hinhAnh: "Một không gian mờ ảo, nơi không gian và thời gian bị hòa quyện, tạo thành những mảng sáng tối giao thoa. Trên mặt đất là những cuốn sách vĩ đại, mở ra từng trang, ghi chép lại toàn bộ lịch sử và ký ức của vũ trụ. Những cánh cổng ký ức mở ra, để các linh hồn có thể bước vào và trở lại với quá khứ, nhìn thấy bản sao ký ức của chính mình hay hồi tưởng những khoảnh khắc đã qua."
},
{ //27
  ten: "Tĩnh Thức",
  bietDanh: "Cõi Yên Tĩnh – Thiền Cảnh",
  tangGioi: "Hư Không Thượng Giới",
  vaiTro: "Địa Cầu Tĩnh Thức không phải là nơi để linh hồn tái sinh hay tiến hóa mà là nơi linh hồn đạt đến sự hoàn thiện tuyệt đối trong việc kiểm soát tâm trí và cảm xúc. Đây là cõi của sự tỉnh thức hoàn toàn, nơi linh hồn có thể hoàn toàn tách rời khỏi các yếu tố ngoại cảnh, và sống trong trạng thái tỉnh thức vĩnh viễn. Linh hồn tại Địa Cầu Tĩnh Thức sẽ không còn cảm thấy sự phân tâm hay sự lệ thuộc vào bất kỳ điều gì bên ngoài, mà đạt đến trạng thái thanh tịnh tuyệt đối, nơi mà mỗi suy nghĩ đều hoàn toàn tự do và trong sáng. Cõi này cũng là nơi của sự giác ngộ tối thượng, nơi linh hồn không còn ham muốn hay sợ hãi, mà chỉ tồn tại trong sự tĩnh lặng, là nguyên lý vũ trụ thuần khiết.",
  hinhAnh: "Một vùng đất mờ ảo bao phủ bởi một ánh sáng dịu dàng, không có sự phân biệt giữa đất trời. Trên mặt đất là những đoàn mây trắng trôi nhẹ, không gian hoàn toàn không có âm thanh, chỉ có sự im lặng tuyệt đối. Những linh hồn hiện hữu trong trạng thái bình yên, như những đốm sáng nhỏ giữa một không gian vắng lặng vô tận. Mọi hình ảnh đều được phác họa một cách tĩnh tại, không có sự chuyển động, chỉ có sự hiện diện thánh thiện và vô biên."
},
{ //28
  ten: "Ánh Trăng",
  bietDanh: "Cõi Mơ Màng – Nơi Tĩnh Lặng Của Ánh Trăng",
  tangGioi: "Linh Hồn Vĩnh Cửu",
  vaiTro: "Địa Cầu Ánh Trăng là nơi mà mọi linh hồn đều có thể tìm thấy bình yên trong ánh sáng dịu dàng của mặt trăng. Ánh sáng ở đây không phải là nắng gắt hay sự chói lọi, mà là ánh sáng mờ ảo mang lại cảm giác thư thái, như một hơi thở nhẹ nhàng, giúp linh hồn đạt đến trạng thái tĩnh tâm. Đây là một nơi hoàn hảo cho sự suy tư, tĩnh lặng và khám phá bản thân. Ánh trăng soi sáng không chỉ bên ngoài mà còn chiếu rọi vào tâm thức của mỗi sinh mệnh, giúp họ tìm về với cội nguồn sâu thẳm bên trong mình, giải quyết những rối bời trong lòng. Địa Cầu Ánh Trăng cũng có thể là nơi để linh hồn du hành ký ức, nơi ánh sáng dịu nhẹ này giúp hiện hình những ký ức quá khứ và gợi nhớ những tâm tư sâu kín chưa được giải thoát.",
  hinhAnh: "Cảnh vật trong vắt dưới ánh trăng mờ ảo, những cánh hoa đêm nhè nhẹ bay trong gió, mặt hồ lấp lánh ánh trăng như một tấm gương lớn phản chiếu toàn bộ cảnh vật xung quanh. Những linh hồn đi nhẹ nhàng trên mặt đất, như bóng ma nhẹ nhàng, để lại dấu chân mờ nhạt trên mặt đất. Cảnh vật không bao giờ thay đổi, nhưng mọi thứ lại như một giấc mơ đang trôi qua."
},
{ //29
  ten: "Giao Cảm",
  bietDanh: "Cõi Tâm Kết Nối – Nơi Đồng Cảm Tột Cùng",
  tangGioi: "Tâm Thức Siêu Cảm",
  vaiTro: "Địa Cầu Giao Cảm là một không gian liên kết linh hồn với nhau, nơi mà mỗi sinh mệnh không cần phải sử dụng lời nói, hành động, hay biểu cảm để thể hiện cảm xúc. Tất cả đều có thể cảm nhận được nhau qua sự giao cảm tuyệt đối. Đây là nơi mà mọi linh hồn có thể hiểu và chia sẻ những cảm xúc sâu thẳm mà không cần phải diễn đạt thành lời. Tại Địa Cầu Giao Cảm, không có sự phân biệt giữa các linh hồn; mọi rào cản về ngôn ngữ, văn hóa, hay giới tính đều bị phá bỏ. Mọi linh hồn đều có thể trải nghiệm cảm xúc của nhau – từ niềm vui, nỗi buồn, cho đến khát vọng và hoài bão. Địa Cầu này cũng là nơi các linh hồn đạt được sự hòa hợp tuyệt đối, thông qua sự kết nối tinh thần.",
  hinhAnh: "Một không gian không có ranh giới hay biên giới vật lý, nơi mọi linh hồn đều được bao bọc bởi ánh sáng ấm áp, tạo thành một mạng lưới sợi tơ giao cảm kết nối tất cả. Các linh hồn ở đây không cần mặt mũi, chỉ là những hình thái ánh sáng, nhưng chúng có thể cảm nhận được sự hiện diện và tình cảm của nhau. Không khí xung quanh như một dòng chảy nhẹ nhàng, cuốn trôi mọi nghi ngờ, thay vào đó là một cảm giác yên bình và đồng cảm sâu sắc."
},
{ //30
  ten: "Tự Học",
  bietDanh: "Cõi Khai Mở – Trường Học Không Thầy",
  tangGioi: "Trí Tuệ Nội Tại",
  vaiTro: "Địa Cầu Tự Học là một nơi nơi không có ai chỉ dẫn trực tiếp, không có lời răn dạy ép buộc, mà mỗi linh hồn phải tự mình trải nghiệm, quan sát, suy ngẫm và trưởng thành. Những thử thách nơi đây không đến từ bên ngoài, mà đến từ chính câu hỏi trong tâm trí, từ khó khăn nội tâm và những bài toán cuộc sống mà linh hồn gặp phải. Những ai bước vào Địa Cầu này đều mang theo sự khát khao khám phá bản thân, tìm hiểu thế giới và các tầng ý nghĩa sâu xa trong từng chi tiết nhỏ nhất. Linh hồn sẽ tự tạo nên bài học riêng mình, và chính trải nghiệm là giáo trình sống.",
  hinhAnh: "Một không gian tràn ngập các cuộn sách bay lơ lửng, màn hình ánh sáng chiếu lên hình ảnh quá khứ, cánh cửa trí tuệ dẫn đến các thế giới khác nhau. Mỗi linh hồn là một học giả du hành, tay cầm bút lửa, chân bước qua các bậc thềm tri thức, ánh mắt chứa đầy câu hỏi chưa lời giải. Không gian không ngừng chuyển động theo nhịp học tập và chiêm nghiệm."
},
{ //31
  ten: "Mộng Tưởng",
  bietDanh: "Cõi Giấc Mơ Sống Dậy – Nơi Tâm Thức Tạo Hình",
  tangGioi: "Ý Niệm Biến Hóa",
  vaiTro: "Địa Cầu Mộng Tưởng là một cõi đa chiều, nơi mà suy nghĩ thoáng qua có thể trở thành cảnh vật, cảm xúc có thể kết tinh thành vật thể, và ký ức có thể được tái hiện như thực tại. Tại đây, linh hồn có thể sáng tạo thế giới riêng, điều khiển không gian – thời gian – hình thể bằng chính sức mạnh tưởng tượng. Địa cầu này là nơi sáng tạo thuần túy, nhưng cũng là nơi bóng tối nội tâm có thể hóa hiện – nếu một linh hồn không làm chủ được tưởng tượng và cảm xúc, chính họ sẽ bị vây quanh bởi những ảo ảnh do chính mình tạo ra.",
  hinhAnh: "Một thế giới liên tục thay đổi hình dạng – rừng cây biến thành lâu đài, giọt nước thành thiên hà, tiếng nhạc thành đường đi, bầu trời đổi màu theo cảm xúc. Các linh hồn nơi đây mang theo đôi mắt tỏa sáng, có thể nhìn thấy ý niệm của nhau, và tạo ra cảnh giới theo ý mình chỉ bằng một cái chạm."
},
{ //32
  ten: "Phản Chiếu",
  bietDanh: "Cõi Gương Tâm Thức – Tấm Gương Nghiệp Báo",
  tangGioi: "Tự Tri & Tự Ảnh",
  vaiTro: "Địa Cầu Phản Chiếu là một cõi thiền nghiệm, nơi linh hồn không còn có thể trốn chạy khỏi chính mình. Mọi sự vật, hoàn cảnh, sinh vật, thậm chí cả âm thanh và màu sắc, đều là biểu tượng sống động của trạng thái nội tâm. Nếu trong lòng có yêu thương – thế giới sẽ tỏa sáng như vườn xuân. Nếu trong lòng có thù hận – thế giới sẽ trở nên lạnh lẽo và khắc nghiệt. Đây không phải là nơi để “thay đổi thế giới”, mà là nơi để hiểu rõ bản thân – vì khi tâm đổi, cảnh đổi ngay tức thì.",
  hinhAnh: "Một thế giới có vẻ ngoài luôn lung linh, phản chiếu như gương, nhưng mọi hình ảnh đều chuyển động theo tâm người quan sát. Rừng cây có thể trở thành gai nhọn nếu tâm người đầy giận dữ, nhưng cũng có thể hóa thành con đường ánh sáng nếu người tràn đầy an lạc. Linh hồn tại đây thường đối diện chính mình qua vô vàn hình tướng khác nhau."
},
{ //33
  ten: "Ảo Ảnh",
  bietDanh: "Cõi Mộng Trung Mộng – Vũ Trụ Huyễn Hóa",
  tangGioi: "Huyễn Tâm – Huyễn Cảnh",
  vaiTro: "Địa Cầu Ảo Ảnh là bài học về mê và ngộ, nơi mà linh hồn dễ dàng lạc lối trong lớp lớp hiện tượng giả lập, tự nhầm lẫn bản ngã là chân ngã, nhầm vọng tưởng là trí tuệ. Thế giới tại đây không ổn định – liên tục biến hóa, xoay chuyển theo ý niệm vô thức và sự dính mắc. Chỉ khi linh hồn buông bỏ tri giác cố chấp, họ mới thấy được chân thật giữa muôn vàn huyễn hóa.",
  hinhAnh: "Một thế giới lung linh, tráng lệ như một giấc mơ – thành phố trôi nổi giữa không trung, biển lơ lửng, sinh vật trong suốt, âm thanh vang vọng từ nhiều chiều không gian. Nhưng mọi thứ đều thay đổi khi tâm dao động – cảnh vật có thể sụp đổ chỉ vì một ý niệm nghi ngờ, hoặc sinh ra từ một khát vọng nhỏ nhoi."
},
{ //34
  ten: "Linh Vật",
  bietDanh: "Cõi Tinh Hoa – Vũ Trụ Hợp Nhất",
  tangGioi: "Thần Linh – Năng Lượng – Vô Hình",
  vaiTro: "Địa Cầu Linh Vật là nơi các linh hồn có thể kết nối với năng lượng vũ trụ và linh hồn của vạn vật, nơi mọi vật chất và năng lượng trong vũ trụ đều tồn tại dưới dạng linh hồn tinh túy. Tại đây, các linh hồn không bị giới hạn bởi không gian và thời gian mà có thể hòa nhập với tất cả các linh vật và vật thể trong thế giới này. Linh hồn tại Địa Cầu Linh Vật có thể học cách tương tác và chữa lành thông qua việc hòa nhập với năng lượng tinh hoa của thiên nhiên, của mọi sinh vật xung quanh. Những linh hồn nơi đây phải học cách đọc và hiểu các dấu hiệu từ linh vật, từ thế giới vô hình, để gia tăng trí tuệ và nâng cao khả năng nhận thức. Đây cũng là nơi linh hồn có thể phục hồi và thăng hoa từ năng lượng nguyên thủy, trở thành một phần của vũ trụ bao la, với khả năng hiểu thấu các quy luật tự nhiên và tinh túy vạn vật.",
  hinhAnh: "Một thế giới huyền bí với những sinh vật kỳ diệu, nửa thực nửa ảo, tồn tại dưới dạng năng lượng và hình thái vô hình. Những linh vật có thể là hình hài của các hành tinh, dòng sông chảy dưới dạng ánh sáng hay cây cối toả ra năng lượng thay vì lá cây. Các linh hồn đi qua cánh cổng ánh sáng phát ra từ các quả cầu linh khí, nơi họ có thể giao tiếp và hòa nhập với lực lượng vũ trụ. Không gian nơi đây uốn cong, mềm mại và không có giới hạn, tạo nên một thế giới vô hình mà đầy mạnh mẽ và linh thiêng. Mọi vật đều rung động trong một điệu nhạc vũ trụ vô tận."
},
{ //35
  ten: "Thử Thách",
  bietDanh: "Cõi Nghiệp Lực – Lò Luyện Ý Chí",
  tangGioi: "Hạ Tâm – Tinh Lực – Ý Chí",
  vaiTro: "Địa Cầu Thử Thách là một cõi tột cùng của thử thách và khổ luyện, nơi linh hồn phải đối mặt với những nỗi sợ hãi sâu thẳm, nghiệp lực chưa hóa giải, và những bản ngã chưa thức tỉnh. Tại đây, mọi linh hồn phải vượt qua một loạt thử thách được thiết kế theo cá tính và nghiệp chướng riêng biệt, không thể trốn tránh, cũng không thể nhận sự trợ giúp. Mỗi thử thách là một bài học về buông bỏ và chấp nhận, về việc vượt qua chính mình, và cuối cùng là học cách đối diện với những thực tại nội tâm để làm chủ được nghiệp lực và bản ngã. Đây là nơi tâm linh phải trải qua quá trình gian khổ để thức tỉnh.",
  hinhAnh: "Một ngọn núi lửa dữ dội, mây đen cuồn cuộn, mặt đất nứt toác chảy ra nham thạch nóng bỏng. Những cây cầu đá treo lơ lửng, nối những vách đá cao chót vót. Từ trên trời, một tấm gương khổng lồ phản chiếu linh hồn đang vật lộn với chính mình, cảm nhận được sức mạnh nội tâm và những thử thách đang dần dần lộ diện. Mọi thử thách tại đây đều đến từ bản thân linh hồn – mỗi bước đi là một cuộc đấu tranh để vượt qua sợ hãi, nghiệp lực, và bản ngã. Cánh cổng ánh sáng sẽ chỉ mở ra khi linh hồn dũng cảm đối mặt và bước qua được chính thử thách mà mình phải đối diện."
},
{ //36
  ten: "Thăng Hoa",
  bietDanh: "Cõi Tinh Tế – Nơi Linh Hồn Tỏa Sáng",
  tangGioi: "Tâm Linh – Thánh Quang – Vô Hình",
  vaiTro: "Địa Cầu Thăng Hoa là một cõi của tinh thần và ánh sáng, nơi linh hồn được trải qua quá trình thăng tiến tinh thần và vượt lên giới hạn vật chất. Tại đây, linh hồn đạt được trạng thái siêu thoát, tiến tới sự kết hợp hoàn hảo giữa cảm nhận tâm linh và trí tuệ vô hạn. Địa Cầu này là nơi linh hồn hoàn thiện bản thân qua việc phát triển trí tuệ cao siêu, hiểu biết sâu sắc, và sự kết nối với nguồn năng lượng vô cùng. Đây là nơi thăng hoa và giác ngộ, giúp linh hồn phát triển khả năng kết nối với những tầng vũ trụ cao hơn.",
  hinhAnh: "Một vườn hoa kỳ diệu, nơi những bông hoa không ngừng nở rộ, mỗi bông hoa chứa đựng cả một tinh linh ánh sáng bên trong. Cảnh vật nơi đây tràn ngập ánh sáng mờ ảo, có thể cảm nhận được sự êm dịu, thanh thoát, giống như một đại dương ánh sáng không bao giờ tắt. Các linh hồn bay lượn tự do, tỏa ra ánh sáng thanh thoát, hòa quyện với không gian, tạo ra cảm giác như họ đang hòa vào vũ trụ vô hạn."
},
{ //37
  ten: "Ánh Hồng",
  bietDanh: "Cõi Tình Yêu Thuần Khiết – Nơi Linh Hồn Hòa Nhịp",
  tangGioi: "Thần Tình – Trái Tim – Chân Tâm",
  vaiTro: "Địa Cầu Ánh Hồng là một cõi của tình yêu thuần khiết và tình thương vô biên, nơi linh hồn học cách vượt qua bản ngã và hòa nhập vào nhịp điệu của vũ trụ qua sự kết nối yêu thương. Đây là cõi hòa hợp và thấu hiểu, nơi mọi linh hồn tìm thấy sự an lạc trong việc mở rộng tâm hồn, xóa bỏ mọi khoảng cách, và làm chủ tình yêu vô điều kiện. Linh hồn tại đây được rèn luyện để phát triển tình yêu thương, học cách tha thứ, và tìm lại bản chất chân thật của chính mình qua mỗi mối quan hệ và sự tương tác.",
  hinhAnh: "Một cánh đồng hoa hồng tươi đẹp, những đóa hoa rực rỡ tỏa ra ánh sáng hồng ấm áp, nhẹ nhàng và an lành. Mỗi linh hồn đang di chuyển giữa những cánh hoa, cảm nhận sự hòa hợp tuyệt vời với vạn vật xung quanh. Dưới ánh sáng vàng dịu nhẹ, mọi vật dường như mang một hơi ấm của tình yêu, khiến không gian trở nên thanh thản và đầy sự thấu hiểu. Một làn gió nhẹ nhàng thổi qua, khiến mọi linh hồn cảm thấy tình yêu dạt dào, vừa dịu dàng vừa mạnh mẽ."
},
{ //38
  ten: "Tâm Kết",
  bietDanh: "Cõi Vô Tư – Nơi Liên Kết Tâm Linh",
  tangGioi: "Tâm Nhẫn – Tâm Thức – Liên Tâm",
  vaiTro: "Địa Cầu Tâm Kết là một cõi của sự kết nối tâm linh và chấp nhận, nơi linh hồn học cách vượt qua những ràng buộc cá nhân và tìm ra sự hòa hợp trong tập thể. Đây là một cõi mà các linh hồn gặp nhau không chỉ bằng cách trao đổi kiến thức, mà còn qua những kết nối cảm xúc sâu sắc. Linh hồn tại đây nhận thức được rằng mọi mối liên kết giữa họ đều là một phần của hành trình chung trong việc phát triển tinh thần. Địa Cầu Tâm Kết không phải là nơi duy nhất để học cách yêu thương, mà còn là nơi linh hồn hiểu rõ hơn về sự kết nối vô hình giữa mọi người và vạn vật.",
  hinhAnh: "Một mạng lưới tinh tế, các dây tơ vắt qua từng không gian, liên kết mọi linh hồn lại với nhau trong một hòa điệu kỳ diệu. Mỗi linh hồn đều có thể cảm nhận được năng lượng của những kết nối này, dường như có thể cảm nhận được những rung động của tâm linh khác qua mỗi nhịp đập của trái tim. Trong không gian bao la này, các linh hồn tỏa ra ánh sáng nhẹ nhàng, kết nối với nhau qua những sợi dây vô hình mang đến sự hiểu biết và thanh thản trong mỗi mối liên kết."
},
{ //39
  ten: "Trường Tưởng",
  bietDanh: "Cõi Tưởng Chân – Nơi Hình Thành Định Mệnh",
  tangGioi: "Ý Thức – Tưởng Niệm – Chí Tâm",
  vaiTro: "Địa Cầu Trường Tưởng là một cõi nơi tưởng niệm và ký ức đóng vai trò trung tâm trong sự phát triển linh hồn. Đây là nơi mọi ý niệm, cảm xúc, và ký ức được khắc sâu và tồn tại lâu dài trong vũ trụ tâm thức. Linh hồn ở đây học cách đối diện với những ký ức quá khứ và nhận thức rằng tưởng tượng có thể hình thành nên định mệnh, từ đó giúp họ hiểu rõ hơn về sự liên kết giữa quá khứ, hiện tại và tương lai. Cõi này cũng khuyến khích linh hồn học cách quản lý ý thức để không bị cuốn vào những tưởng niệm tiêu cực mà thay vào đó hướng tới sự tỉnh thức và sáng tạo.",
  hinhAnh: "Một cảnh vật vĩnh cửu, nơi mỗi tưởng niệm và ký ức được khắc lên những tấm gương lớn tỏa sáng trong không gian vô tận. Mỗi linh hồn di chuyển giữa các gương, nhìn thấy những hình ảnh và cảm xúc đã qua, nhưng lại có thể thấy rõ tương lai mình sẽ đi qua. Một ánh sáng ấm áp chiếu sáng từng ký ức, tạo nên một không gian thanh thản nhưng cũng đầy tính khám phá, nơi linh hồn đối diện với những gì đã qua để hòa giải và tiến bước."
},
{ //40
  ten: "Hiển Lộ",
  bietDanh: "Cõi Thực Tại – Nơi Chân Ngã Tỏa Sáng",
  tangGioi: "Thực Tại – Bản Ngã – Linh Quang",
  vaiTro: "Địa Cầu Hiển Lộ là một cõi mà chân lý và bản ngã của linh hồn được khám phá và biểu lộ ra ngoài. Tại đây, không có sự che giấu, không có màn sương mù của sự vô minh – mọi điều đều rõ ràng, hiển lộ một cách trọn vẹn. Linh hồn không thể nào sống trong giả dối hay che đậy bản chất thật của mình. Đây là nơi tự nhận thức và chấp nhận bản ngã của mình là điều quan trọng nhất, đồng thời hiểu rằng sự thật không cần phải tìm kiếm, vì nó đã luôn hiện hữu bên trong mỗi người. Linh hồn trong Địa Cầu Hiển Lộ học cách thể hiện bản thân một cách chân thành, không sợ hãi, và không ngại ngần trong việc trải nghiệm thực tại.",
  hinhAnh: "Một không gian trong suốt, với ánh sáng vàng chiếu rọi mọi góc cạnh, vạn vật đều rõ ràng, không có bóng tối. Mọi linh hồn đứng giữa một đại dương ánh sáng, nơi họ có thể thấy rõ ràng mọi khía cạnh của bản thân mình. Những bóng hình mờ ảo dần được vạch trần, để lại chỉ còn lại sự thuần khiết và chân thực. Đại dương ánh sáng này không chỉ chiếu sáng mà còn chứa đựng năng lượng tự do, giúp linh hồn bước ra ngoài vỏ bọc của sự giấu giếm, đón nhận sự hiển lộ của bản ngã chân thực."
},
{ //41
  ten: "Hồi Ngộ",
  bietDanh: "Cõi Tái Sinh – Nơi Quay Về Bản Ngã",
  tangGioi: "Thức Tỉnh – Tái Hòa – Quá Khứ",
  vaiTro: "Địa Cầu Hồi Ngộ là cõi mà linh hồn phải trở về bản ngã của mình, đối diện với quá khứ và các lựa chọn đã qua để hiểu rõ hơn về hành trình phát triển tâm linh. Đây là nơi linh hồn có thể hoàn tất những chu kỳ chưa kết thúc, đối diện với những vết thương nội tâm chưa được chữa lành và hồi phục để có thể bước tiếp trong hành trình tiến hóa. Cõi này khuyến khích linh hồn buông bỏ những mối liên kết không cần thiết từ quá khứ và tái hòa nhập với bản thể chân thật, giúp họ tìm thấy con đường thật sự của mình trong vũ trụ vô tận. Mỗi linh hồn sẽ trải qua quá trình hồi ngộ với chính mình, học cách đối diện và chữa lành từ những kinh nghiệm đã qua.",
  hinhAnh: "Một cảnh vật tĩnh lặng với những con đường uốn lượn, dẫn linh hồn qua các vùng đất quen thuộc nhưng đã được thay đổi theo thời gian. Dọc theo những con đường đó, những cánh cửa mở ra, dẫn đến những ký ức cũ, nhưng mỗi lần linh hồn bước qua, họ lại thấy mình thay đổi, được hồi sinh trong một gương mặt mới, một con đường mới. Ánh sáng dịu dàng từ các vầng sáng xa xôi chiếu sáng con đường, như một hành trình tìm lại chính mình, không còn mờ mịt mà rõ ràng và đầy hy vọng."
},
{ //42
  ten: "Mê Lộ",
  bietDanh: "Cõi Mê Muội – Nơi Lạc Lối Tâm Linh",
  tangGioi: "Vọng Tưởng – Định Lực – Mê Tâm",
  vaiTro: "Địa Cầu Mê Lộ là một cõi mà linh hồn sẽ phải đối diện với những mê lộ trong tâm thức của chính mình. Tại đây, linh hồn có thể bị mê hoặc, lạc lối trong những ảo tưởng và bóng tối của những suy nghĩ và cảm xúc không được nhận thức rõ ràng. Mỗi linh hồn phải đối mặt với những thử thách của sự mơ hồ, để tự mình nhận ra con đường thoát khỏi mê lộ và tìm thấy ánh sáng của nhận thức chân thực. Đây là một cõi nơi mà linh hồn học cách thoát khỏi bẫy của suy nghĩ và cảm xúc mê hoặc, dần dần tìm lại được sự thống nhất nội tâm và một cái nhìn rõ ràng về thực tại.",
  hinhAnh: "Một mê cung vĩnh cửu với những bức tường chuyển động, những con đường quanh co không có điểm dừng. Mỗi bước đi đều có thể dẫn linh hồn vào những ngã rẽ không rõ ràng, nơi mà sự lạc lối trở thành không gian vô tận. Những vùng tối mờ ảo che khuất tầm nhìn, chỉ khi linh hồn bình tĩnh, dừng lại và đối diện với cảm xúc và suy nghĩ của mình, con đường mới bắt đầu hiện ra. Ánh sáng từ những ngôi sao xa xôi chiếu sáng dọc theo lối đi, chỉ cho linh hồn con đường thoát khỏi mê lộ."
},
{ //43
  ten: "Phát Nguyện",
  bietDanh: "Cõi Hướng Thiện – Nơi Thắp Sáng Tâm Nguyện",
  tangGioi: "Tâm Từ Bi – Hành Động – Nguyện Lực",
  vaiTro: "Địa Cầu Phát Nguyện là cõi nơi linh hồn khám phá và thực hành sức mạnh của nguyện lực. Đây là một thế giới nơi mọi linh hồn được khuyến khích phát nguyện về những lý tưởng cao cả, những mục tiêu thiêng liêng, và những mong muốn về sự chuyển hóa nội tâm. Linh hồn sẽ phải đối diện với những thử thách trong quá trình thực hiện nguyện ước của mình, học cách vượt qua những rào cản và khó khăn trong cuộc sống để tiến gần hơn đến ước nguyện của mình. Cõi này giúp linh hồn phát triển từ bi, trí tuệ và sự kiên nhẫn, đồng thời tạo ra một hành động có ý thức để thực hiện những nguyện vọng của mình.",
  hinhAnh: "Một khu rừng bao quanh với những con đường mở ra, mỗi con đường dẫn đến một ngôi đền ánh sáng, nơi mà linh hồn có thể phát nguyện và nhận thức được sự kết nối với mục tiêu mình đã chọn. Mỗi bước đi đều được sáng lên bởi ngọn đèn lửa nhỏ, ánh sáng từ mỗi ngọn lửa tượng trưng cho một nguyện ước đang cháy bỏng trong lòng. Cảnh vật yên bình, tĩnh lặng, chỉ có âm thanh của gió nhẹ nhàng dẫn lối, như là một lời nhắc nhở về sự kiên trì và quyết tâm trong việc hoàn thành nguyện ước."
},
{ //44
  ten: "Thể Tâm",
  bietDanh: "Cõi Hòa Hợp – Nơi Nhập Thể Tâm Linh",
  tangGioi: "Thân Tâm – Hòa Nhập – Vô Ngã",
  vaiTro: "Địa Cầu Thể Tâm là một cõi của hòa hợp và thể nhập, nơi linh hồn học cách hòa mình vào vũ trụ, vượt qua rào cản giữa tâm và thể. Đây là nơi linh hồn tìm cách thấu hiểu mối liên kết sâu sắc giữa thể xác và tâm hồn, nơi mỗi hành động, cảm xúc, và tư tưởng đều trở thành một phần của một tổ chức vĩ đại hơn. Linh hồn sẽ nhận thức được rằng không có sự phân biệt giữa bản thân và vũ trụ, mà tất cả đều là một thể thống nhất. Cõi này giúp linh hồn phát triển sự đồng cảm, trí tuệ và sự giác ngộ để thấy được tính vô ngã và thể nhập trong mỗi hành động.",
  hinhAnh: "Một khu vườn rộng lớn, nơi các cây cối, hoa lá, và sinh vật trong vũ trụ cùng chung sống hài hòa, không có sự phân biệt, chỉ có sự đồng điệu. Từng chiếc lá nhẹ nhàng rơi xuống mặt hồ tĩnh lặng, tạo thành những gợn sóng lan tỏa khắp không gian, như là biểu tượng của sự hòa nhập trong từng hơi thở. Tại đây, mọi linh hồn không còn phân biệt bản ngã và cái toàn thể, mà sống trong sự hòa nhịp, hòa hợp với vũ trụ rộng lớn."
},
{ //45
  ten: "Hội Tụ",
  bietDanh: "Cõi Giao Thoa – Điểm Gặp Của Muôn Dòng Tiến Hóa",
  tangGioi: "Trung Tâm – Giao Điểm – Hợp Nhất",
  vaiTro: "Địa Cầu Hội Tụ là nơi các dòng tiến hóa khác nhau trong vũ trụ gặp nhau, tương tác, học hỏi và cùng tiến lên. Tại đây, linh hồn không còn đi một mình trên con đường tu tập, mà giao thoa với các lộ trình tâm linh khác, từ các chiều không gian khác nhau, các chủng loài, và các hệ thống pháp môn riêng biệt. Cõi này là trung tâm của giao tiếp liên linh hồn, nơi trí tuệ tập thể và năng lượng hợp nhất cùng hoạt động. Linh hồn học cách tôn trọng sự khác biệt, hòa hợp mà không đồng hóa, và kết nối mà không mất mình. Đây là chặng đường quan trọng giúp mở rộng nhận thức toàn diện và chuẩn bị cho bước nhảy vọt cuối cùng trong hành trình trở về nguồn.",
  hinhAnh: "Một vòng xoáy ánh sáng rực rỡ ở trung tâm vũ trụ, nơi hàng ngàn con đường ánh sáng từ các hướng khác nhau cùng đổ về. Tại trung tâm là một quảng trường không gian, nơi các sinh thể từ các thế giới khác nhau – người, thú, tinh linh, thực thể ánh sáng – cùng ngồi thiền, chia sẻ tri kiến qua ánh mắt và năng lượng. Trên bầu trời, các biểu tượng của muôn pháp môn tỏa sáng, phản chiếu lẫn nhau, tạo thành một mandala vũ trụ sống động."
},
{ //46
  ten: "Tịnh Độ",
  bietDanh: "Cõi An Lạc Tuyệt Đối – Mảnh Gương Của Cực Lạc",
  tangGioi: "Tịnh Tâm – Tịnh Giới – Tịnh Thức",
  vaiTro: "Địa Cầu Tịnh Độ là biểu hiện gần nhất của cõi Cực Lạc trong vòng tiến hóa luân hồi, nơi nỗi khổ, phiền não và vọng tưởng được hóa giải gần như triệt để. Linh hồn đến đây để thanh lọc tri thức và tình cảm, làm trong sáng tâm hồn, và học cách an trú trong hiện tại tuyệt đối. Tại đây không còn xung đột dữ dội hay thử thách khốc liệt, mà là những bài học vi tế về buông xả, lắng nghe, và cảm nhận sự toàn vẹn trong từng hơi thở, từng ánh sáng. Cõi này cũng là trạm trung chuyển cuối cùng trước khi linh hồn bước vào các tầng giới cao siêu hơn – nơi thời gian tan biến và bản ngã hoàn toàn tan rã.",
  hinhAnh: "Một cảnh giới tràn ngập ánh sáng dịu dàng, nơi hồ sen lấp lánh, những cánh đồng hoa không tàn, và âm thanh pháp âm ngân nga khắp không gian. Trời luôn là bình minh hoặc hoàng hôn – ánh sáng êm dịu như vỗ về tâm thức. Các linh hồn thiền định trên những đài sen khổng lồ, kết nối với nhau qua luồng ánh sáng màu vàng trắng phát ra từ tim. Không khí nơi đây thanh nhẹ như không tồn tại, nhưng lại mang đầy năng lượng chữa lành và giác ngộ."
},
{ //47
  ten: "Dạ Ảnh",
  bietDanh: "Cõi Bóng Tối Nội Tâm – Gương Phản Chiếu Của Vô Thức",
  tangGioi: "Vô Thức – Bóng Tối – Tự Ảnh",
  vaiTro: "Địa Cầu Dạ Ảnh là nơi linh hồn phải đối diện với phần tối tăm bị lãng quên trong chính mình – những ký ức bị chối bỏ, cảm xúc bị kìm nén, và thành kiến vô thức. Đây không phải cõi tà ác, mà là kho tàng bóng tối chưa được thấu hiểu, nơi chân lý và ảo tưởng hòa quyện. Linh hồn đến đây để học cách chấp nhận chính mình trong toàn thể – cả ánh sáng lẫn bóng tối, và tìm ra con đường cân bằng sâu sắc. Địa Cầu này cũng là nơi thử thách lòng can đảm: không phải để chiến thắng, mà để lắng nghe, đối thoại, và chuyển hóa bóng tối thành hiểu biết.",
  hinhAnh: "Một thế giới chìm trong ánh trăng bạc, nơi ánh sáng luôn dịu nhẹ và mọi vật đều đổ bóng rất dài. Có rừng sương mù, hồ nước tĩnh lặng phản chiếu ký ức, và những hành lang vô tận dẫn về tiềm thức sâu xa. Sinh vật nơi đây thường có hình dạng mơ hồ – như kết tinh từ cảm xúc và nỗi niềm chưa trọn vẹn. Mỗi bước chân như vang vọng trong tâm linh, dẫn linh hồn về gặp lại chính mình thuở xa xưa."
},
{ //48
  ten: "Chuyển Hóa",
  bietDanh: "Cõi Tái Sinh – Lò Luyện Linh Hồn",
  tangGioi: "Biến Hóa – Thăng Hoa – Tái Tạo",
  vaiTro: "Địa Cầu Chuyển Hóa là nơi linh hồn trải qua quá trình biến đổi sâu sắc và thăng hoa. Tại đây, mỗi linh hồn phải đương đầu với các yếu tố cản trở sự phát triển của bản thân, dọn dẹp những năng lượng tiêu cực và tái tạo chính mình từ những trải nghiệm khổ đau. Đây là nơi của cải cách bản thân – nơi tất cả những vết thương tâm linh được chữa lành, để từ đó linh hồn có thể tái sinh thành một thực thể mới, nhẹ nhàng và trong sáng hơn. Linh hồn sẽ học cách chuyển hóa nghiệp lực và tìm lại bản ngã chân chính của mình, hướng đến sự tự do trong tâm thức.",
  hinhAnh: "Một khu rừng cổ xưa với dòng sông ánh sáng chạy xuyên qua, vách đá xung quanh phủ đầy hoa sen và cỏ non, nước trong như gương phản chiếu ánh sáng dịu nhẹ từ bầu trời. Những cây cối nơi đây tự thay đổi hình dáng, giống như một quá trình sinh trưởng không ngừng. Các linh hồn, như những dòng nước, không ngừng chảy qua các thử thách và môi trường khác nhau, biến đổi và thăng hoa trước khi trở lại thành dạng vật chất nguyên thủy. Cảnh vật dường như vô hình nhưng lại đầy sức mạnh, tất cả tạo nên một bầu không khí đầy hy vọng và sự tái sinh."
},
{ //49
  ten: "Khởi Sinh",
  bietDanh: "Cõi Tiên Đoán – Mầm Mống Sự Sống",
  tangGioi: "Sinh Mệnh – Khởi Tạo – Tương Lai",
  vaiTro: "Địa Cầu Khởi Sinh là nơi tất cả sự sống bắt đầu, nơi mà linh hồn cảm nhận và khởi xướng những tiềm năng vô hình của sự tồn tại. Đây là cõi của mầm mống, nơi những ý niệm đầu tiên về sự sống, sự sáng tạo và hướng đi tương lai được hình thành. Linh hồn nơi đây học cách khởi tạo, từ những ý tưởng, cảm xúc và hành động nhỏ bé tạo ra những thay đổi vĩ đại trong quá trình sống. Điều quan trọng ở đây là sự tiên đoán và chọn lựa, linh hồn cần học cách sử dụng sức mạnh sáng tạo của mình để vượt qua các thử thách trong tương lai và khởi sinh những khả năng mới.",
  hinhAnh: "Một cánh đồng bao la, nơi những mầm cây nở ra từ đất mẹ, vươn mình ra ánh sáng mặt trời. Trên nền trời là những làn sóng năng lượng, tương lai mờ ảo, nhưng luôn hiện hữu trong từng khoảnh khắc hiện tại. Những hạt giống khởi đầu chạm đất, những con đường nhỏ dẫn tới vô vàn khả năng, tất cả đều tỏa sáng từ một điểm sáng nhỏ bé trên mặt đất. Các linh hồn nơi đây như những nhà sáng tạo, nắm bắt từng cơ hội để tạo ra những thế giới mới, những con đường mới."
},
{ //50
  ten: "Tồn Tại",
  bietDanh: "Cõi Bản Ngã – Nền Tảng Sự Sống",
  tangGioi: "Tồn Tại – Vững Chắc – Bản Thể",
  vaiTro: "Địa Cầu Tồn Tại là cõi vững chắc nhất, nơi linh hồn học cách duy trì sự hiện hữu trong suốt mọi biến động của thế gian. Đây là nơi bản ngã của linh hồn được củng cố, sự sống được bồi đắp, và linh hồn nhận thức rõ về sự tồn tại của chính mình trong vũ trụ này. Linh hồn nơi đây phải vượt qua sự mơ hồ và khám phá bản chất sâu xa của chính mình. Địa Cầu Tồn Tại không chỉ là nơi học về sự hiện hữu, mà còn là hành trình nhận thức về mối liên hệ giữa linh hồn và thế giới vật chất. Linh hồn sẽ học cách tạo dựng sự bền vững, giữ gìn và trân trọng từng khoảnh khắc sự sống dù thế giới bên ngoài thay đổi.",
  hinhAnh: "Một ngọn núi vững chãi, đứng sừng sững trong không gian vô tận, phủ đầy cỏ xanh và hoa dại, bầu trời bao la, không có điểm cuối. Những dòng suối chảy êm đềm, rừng cây xanh tươi, tạo nên một cảnh quan ổn định, không có sóng gió, chỉ có sự tĩnh lặng vĩnh cửu. Các linh hồn nơi đây đứng trên đỉnh núi, cảm nhận sự vững chãi của bản thân, cảm nhận sự tồn tại tự nhiên và mạnh mẽ, và hiểu rằng sự sống là một phần không thể thiếu của vũ trụ này."
},
{ //51
  ten: "Cảm Giác",
  bietDanh: "Cõi Vô Hình – Cảm Quan Tinh Tế",
  tangGioi: "Nhận Thức – Cảm Nhận – Tinh Thần",
  vaiTro: "Địa Cầu Cảm Giác là nơi linh hồn khám phá và cảm nhận sự sống qua các giác quan tinh tế. Tại đây, linh hồn sẽ trải qua một hành trình đi từ nhận thức thô sơ đến việc khai mở các cảm giác siêu việt, học cách lắng nghe thế giới bên trong và bên ngoài, từ đó phát triển khả năng đọc hiểu và cảm nhận sâu sắc về tâm thức và vũ trụ. Linh hồn nơi đây không chỉ học cách sử dụng cảm giác vật lý mà còn kết nối với các cảm nhận vô hình về năng lượng, cảm xúc và những tín hiệu từ các chiều không gian. Đây là nơi thức tỉnh các giác quan nhằm nhận biết sự thật sâu xa về bản thể và thế giới.",
  hinhAnh: "Một cảnh vật huyền bí với ánh sáng lấp lánh, những vòng tròn năng lượng xoay quanh nhau, tượng trưng cho các giác quan đang kết nối với những tầng lớp vô hình của thế giới. Mỗi bước đi trên mặt đất sẽ tạo ra những rung động nhẹ, và các màu sắc cũng thay đổi tùy vào tâm trạng và cảm giác của linh hồn. Linh hồn tại đây có thể cảm nhận được từng vibrations, dòng chảy của năng lượng, hoặc những lời thì thầm của vũ trụ, tạo ra một thế giới vừa ảo vừa thật."
},
{ //52
  ten: "Ý Thức",
  bietDanh: "Cõi Nhận Thức Cao Cấp – Đỉnh Cao Tinh Thần",
  tangGioi: "Linh Hồn – Ý Thức – Chân Ngã",
  vaiTro: "Địa Cầu Ý Thức là nơi linh hồn bước vào hành trình tự nhận thức sâu sắc, nơi tâm thức được khai mở hoàn toàn để kết nối với chân ngã và tinh thần vũ trụ. Tại đây, linh hồn phải học cách vượt qua mọi rào cản tâm lý, dễ dàng tách rời khỏi các quan niệm cố định và nhận ra bản chất thật sự của mình. Linh hồn sẽ đi qua các cảnh giới của tư duy, khám phá các tầng ý thức và kết nối sâu sắc với các chân lý vĩnh hằng. Đây là nơi thức tỉnh hoàn toàn, nơi ý thức không còn bị giới hạn bởi các hình thức vật lý hay bản ngã cá nhân, mà trở nên hòa hợp với những chân lý vũ trụ.",
  hinhAnh: "Một vũ trụ vô tận, nơi các tinh tú tạo thành những con đường ánh sáng rực rỡ, dẫn linh hồn vượt qua các tầng mây mờ. Cảnh vật là một không gian mênh mông, nơi mỗi linh hồn trở thành ánh sáng, thoát khỏi hình hài vật lý, tự do bay lượn trong vũ trụ của nhận thức thuần túy. Các năng lượng vũ trụ chảy xung quanh linh hồn như dòng nước trong suốt, tạo thành một sự kết nối mạnh mẽ giữa mọi sự sống và các chân lý tối thượng."
},
{ //53
  ten: "Tham Dục",
  bietDanh: "Cõi Cám Dỗ – Vũ Trụ Nghiệp Lực",
  tangGioi: "Cảm Xúc – Nghiệp Lực – Dục Vọng",
  vaiTro: "Địa Cầu Tham Dục là nơi linh hồn phải đối mặt với cám dỗ của tham muốn và dục vọng. Đây là cõi mà linh hồn bị lôi cuốn vào những thực tại mê lạc, nơi mà ham muốn vật chất, tình cảm hay quyền lực dẫn dắt họ vào những vòng xoáy nghiệp chướng. Linh hồn nơi đây sẽ phải học cách khai sáng và tinh lọc những ham muốn của mình, từ đó vượt qua được sự ràng buộc của dục vọng. Đây là nơi linh hồn phải chiến đấu với chính những nỗi sợ hãi và thèm khát để nhận ra giá trị thật sự của sự buông bỏ và tự do tinh thần. Địa Cầu này dạy rằng chỉ khi linh hồn vượt qua được những cảm xúc thừa thãi và thực tại lừa dối, họ mới có thể đạt đến sự thanh tịnh và giải thoát.",
  hinhAnh: "Một cảnh vật đầy màu sắc rực rỡ, nơi những cánh hoa vàng rực hay những dòng suối vàng ẩn chứa sự cám dỗ. Linh hồn di chuyển trong không gian đầy ánh sáng huyền bí và những mối quan hệ lôi cuốn, nhưng những bóng tối ẩn nấp sau lớp hào quang của dục vọng lại luôn gợi lên nỗi lo âu và cảm giác bất an. Mọi thứ tại đây đều có vẻ hấp dẫn nhưng khi chạm vào lại mang đến cảm giác trống rỗng và thất vọng, chỉ có những linh hồn không bị mê hoặc mới có thể tìm ra con đường để thoát khỏi."
},
{ //54
  ten: "Phân Ly",
  bietDanh: "Cõi Chia Cắt – Nơi Đối Diện Nỗi Đau Tách Biệt",
  tangGioi: "Nỗi Đau – Tách Rời – Chấp Thủ",
  vaiTro: "Địa Cầu Phân Ly là nơi linh hồn phải đối mặt với nỗi đau chia cắt và cảm giác mất mát. Tại đây, linh hồn trải qua sự tách biệt với những gì đã thân thuộc, như tình yêu, gia đình, hoặc những mối quan hệ quan trọng. Đây là cõi mà sự chia ly và mất mát không thể tránh khỏi, giúp linh hồn học cách chấp nhận sự thay đổi và vượt qua nỗi đau. Linh hồn nơi đây cần học cách vượt qua sự buông bỏ, hiểu rằng mỗi sự phân ly đều có mục đích sâu sắc, giúp họ nhận ra sự phụ thuộc vào những điều bên ngoài. Địa Cầu này là một thử thách để khám phá bản thân, tách ra khỏi những sự ràng buộc của ngoại cảnh, và tìm lại sự hoàn thiện trong nội tâm.",
  hinhAnh: "Một thế giới mờ mịt, nơi những dòng sông chia cắt các vách núi, và các con đường tách ra theo nhiều hướng khác nhau. Những cây cầu đổ nát, mây mù trôi dạt, tạo nên một khung cảnh cô đơn và trống vắng. Linh hồn băng qua những con đường chia cắt, mỗi bước đi như một thử thách để chấp nhận sự chia ly, trong khi hồn vẫn vương vấn về những mối liên kết cũ. Mọi thứ xung quanh đều bị tách rời, nhưng cuối cùng, ánh sáng sẽ dẫn đường để linh hồn học được cách hòa nhập trở lại với chính mình."
},
{ //55
  ten: "Đối Kháng",
  bietDanh: "Cõi Đấu Tranh – Nơi Khẳng Định Bản Ngã",
  tangGioi: "Xung Đột – Nghịch Lý – Tự Vượt Qua",
  vaiTro: "Địa Cầu Đối Kháng là nơi linh hồn đối diện với những xung đột nội tâm và vượt qua các thử thách khắc nghiệt. Tại đây, linh hồn phải đối mặt với những đối kháng, không chỉ từ bên ngoài mà còn từ chính bản ngã của mình. Cõi này chính là vũ đài nơi mâu thuẫn và xung đột xảy ra, buộc linh hồn phải lựa chọn giữa chấp nhận hay chuyển hóa những trạng thái đối nghịch bên trong. Đây là nơi linh hồn khẳng định bản thân và vượt qua những ràng buộc cũ. Khi linh hồn nhận thức được mâu thuẫn trong tâm trí và học cách hòa giải, họ sẽ đạt được sự thăng hoa và tự do thực sự. Địa Cầu này dạy rằng chỉ có qua sự đối kháng, linh hồn mới có thể tìm ra được con đường thực sự cho mình, vượt qua những định kiến và hòa hợp với tự ngã.",
  hinhAnh: "Một thế giới bị chia cắt bởi những đỉnh núi chập chùng, các dòng sông cuộn sóng và những bức tường băng vỡ vụn. Mặt đất bị nứt ra thành những vết rãnh sâu thẳm, nơi ánh sáng và bóng tối đấu tranh liên tục, không ngừng. Linh hồn di chuyển trong không gian đầy sức mạnh và sóng gió, nơi mỗi bước đi đều như một trận chiến. Thế giới này luôn thay đổi, như một cảnh hỗn loạn, nhưng chính trong hỗn loạn ấy, linh hồn học cách nhận ra sức mạnh thật sự của mình và hòa giải những mâu thuẫn bên trong."
},
{ //56
  ten: "Khám Phá",
  bietDanh: "Cõi Tìm Kiếm – Con Đường Vô Tận",
  tangGioi: "Sự Tò Mò – Tiến Bộ – Trí Tuệ",
  vaiTro: "Địa Cầu Khám Phá là một cõi mà linh hồn không ngừng tìm kiếm và khám phá những chân lý mới. Đây là nơi mà sự tò mò và ham muốn hiểu biết dẫn dắt linh hồn vượt qua mọi ranh giới, mở rộng tâm thức và nâng cao trí tuệ. Tại đây, linh hồn được thử thách để vượt qua sự ẩn dật, đối diện với sự không biết và khám phá những chiều sâu của vũ trụ. Địa Cầu này là cõi của tri thức vô tận, nơi linh hồn luôn trong trạng thái của hành trình học hỏi, khát khao và phát triển bản thân. Chỉ khi linh hồn không ngừng đặt câu hỏi và tìm kiếm câu trả lời, họ mới có thể hiểu rõ bản thân và thế giới xung quanh, đồng thời tìm ra những mục tiêu cao cả trong cuộc sống.",
  hinhAnh: "Một thế giới bao la với những con đường mở rộng vô tận, bao quanh bởi các núi non hùng vĩ và biển cả mênh mông. Những hầm mỏ sâu và khu rừng chưa khai phá luôn hé lộ những bí ẩn chưa được khám phá. Mỗi bước đi là một khám phá mới, mỗi bước chân là một sự mở mang trí tuệ, và ánh sáng rực rỡ xuất hiện khi linh hồn tìm thấy một phần của chân lý. Linh hồn có thể nhìn thấy vũ trụ như một bức tranh vô tận, nơi mà mỗi chi tiết đều đang chờ đợi để được khám phá và hiểu biết."
},
{ //57
  ten: "Phân Biệt",
  bietDanh: "Cõi Ranh Giới – Nơi Ranh Mốc và Định Nghĩa",
  tangGioi: "Nhận Thức – Phân Biệt – Quyết Định",
  vaiTro: "Địa Cầu Phân Biệt là một cõi nơi linh hồn phải đối diện với sự phân tách và định nghĩa ranh giới trong thế giới nội tâm. Đây là nơi mà mọi sự vật, sự việc đều phải được phân biệt rõ ràng – không thể mơ hồ, không thể nhầm lẫn. Tại đây, linh hồn học cách nhận thức sự khác biệt giữa các yếu tố trong cuộc sống, từ đó đưa ra quyết định đúng đắn và hòa hợp giữa các mối quan hệ. Địa Cầu này thử thách linh hồn trong việc phát triển khả năng quyết đoán và phân tích, đồng thời giúp họ nhận ra sự rõ ràng trong mọi khía cạnh của thực tại. Đây cũng là nơi linh hồn phải học cách đối mặt với sự phân tách giữa cái tôi và người khác, giữa các ý tưởng, quan điểm và lý tưởng khác nhau, từ đó hình thành sự chính trực và kiên định trong hành động.",
  hinhAnh: "Một vườn hoa đa sắc nơi các hoa lá được sắp xếp theo từng khu vực riêng biệt, mỗi khu vực lại có một màu sắc và hình dạng khác nhau. Những dòng sông chia cắt những khu vực đó, tạo thành những ranh giới rõ ràng, nhưng lại không hề ngăn cản sự giao lưu và hoà nhập. Những cánh cổng lớn với các biểu tượng phân biệt mở ra, nhưng chỉ khi linh hồn hiểu được bản chất của sự phân biệt, cánh cổng mới có thể dẫn họ đến sự hòa hợp và hiểu biết sâu sắc."
},
{ //58
  ten: "Chiếm Hữu",
  bietDanh: "Cõi Sở Hữu – Vương Quốc Của Quyền Lực và Lòng Tham",
  tangGioi: "Nghiệp Lực – Quyền Lực – Lòng Tham",
  vaiTro: "Địa Cầu Chiếm Hữu là nơi linh hồn phải đối mặt với tham vọng và sự chiếm hữu. Tại đây, linh hồn học cách cân bằng giữa việc thâu tóm quyền lực, tài sản, và những giá trị trong cuộc sống mà không bị cuốn vào tham lam và kiểm soát. Đây là bài học về sở hữu và chia sẻ, nơi linh hồn sẽ trải qua những thử thách liên quan đến việc có và không có, và nhận ra rằng sự chiếm hữu không phải lúc nào cũng mang lại hạnh phúc thật sự. Địa Cầu này còn giúp linh hồn nhận thức rằng tự do và hạnh phúc không đến từ sự chiếm hữu vật chất, mà từ sự giải thoát khỏi sự gắn bó và bất biến.",
  hinhAnh: "Một hoàng cung rộng lớn, nơi những người cai trị luôn đi khắp nơi với vương miện sáng chói và ngọc ngà. Những đường phố lộng lẫy, đầy vàng bạc châu báu, nhưng lại vắng lặng và hiu quạnh. Những cánh cửa kín luôn đóng chặt, không thể vào được dù cho bên trong có bao nhiêu của cải. Khi linh hồn nhìn vào gương phản chiếu, họ thấy mình đang đứng trong vương quốc của sự thao túng và kiểm soát, nhưng không thể tìm thấy niềm vui thật sự. Chỉ khi linh hồn buông bỏ ham muốn sở hữu, họ mới tìm được hạnh phúc vĩnh cửu."
},
{ //59
  ten: "Khổ Luyện",
  bietDanh: "Cõi Khổ Tập – Lò Luyện Linh Hồn",
  tangGioi: "Sự Thử Thách – Tinh Thần – Vượt Qua Khổ Đau",
  vaiTro: "Địa Cầu Khổ Luyện là một cõi khổ đau và rèn luyện không ngừng, nơi linh hồn phải trải qua những thử thách khắc nghiệt để tinh luyện bản thân. Tại đây, mỗi linh hồn phải đối mặt với những nỗi đau từ quá khứ, nghiệp quả từ những hành động sai lầm, và sự thiếu thốn về mặt tinh thần. Cõi này không có chỗ cho sự trốn tránh, mỗi linh hồn phải đối diện trực tiếp với khổ đau để vượt qua và thăng hoa. Địa Cầu Khổ Luyện giúp linh hồn lột xác qua quá trình chịu đựng, học hỏi và rèn luyện. Chỉ khi linh hồn học được cách biến khổ đau thành sức mạnh, họ mới có thể vượt qua thử thách này và tiếp tục hành trình tu học của mình.",
  hinhAnh: "Một cánh đồng cháy bỏng dưới ánh mặt trời dữ dội, nơi linh hồn phải bước đi trên cát nóng với bàn chân trần. Các sợi dây thừng khắc nghiệt quấn quanh linh hồn, giam giữ và kéo họ về phía trước. Mỗi bước đi đều là một thử thách. Những nỗi đau và thất bại cứ liên tiếp xuất hiện, nhưng cũng chính từ đó, linh hồn bắt đầu cảm nhận sự trưởng thành. Sau mỗi lần chịu đựng, linh hồn lại có thể thắp lên một tia sáng trong lòng, tiếp tục hành trình vượt qua bản thân và đạt đến sự hoàn thiện."
},
{ //60
  ten: "Tỉnh Ngộ",
  bietDanh: "Cõi Minh Tâm – Sự Giác Ngộ Thần Thánh",
  tangGioi: "Thức Tỉnh – Sự Nhận Thức – Sự Giải Phóng",
  vaiTro: "Địa Cầu Tỉnh Ngộ là nơi giác ngộ và tự nhận thức. Đây là cõi mà các linh hồn tìm thấy ánh sáng thật sự của sự hiểu biết, nơi thức tỉnh khỏi mọi nghi hoặc, vô minh và hư huyễn. Tại đây, linh hồn sẽ dần nhận ra bản chất chân thực của vũ trụ và chính bản thân mình, thông qua việc giải thoát khỏi mọi dính mắc và bản ngã. Mọi thử thách tại đây không phải là khổ đau, mà là những bài học về nhận thức, về sự sáng suốt và khai mở tâm trí. Linh hồn tại Địa Cầu Tỉnh Ngộ sẽ bước vào một giai đoạn mà họ có thể thực sự hiểu và chấp nhận những quy luật của vũ trụ, từ đó đạt đến sự giải thoát và thăng hoa.",
  hinhAnh: "Một mặt hồ yên tĩnh, phản chiếu bầu trời trong xanh, nhưng sâu bên dưới, những đáy hồ sáng ngời mở ra một thế giới rộng lớn, tràn đầy ánh sáng và sự sống. Những vòng sóng nhẹ nhàng lan tỏa từ chính các tư tưởng của linh hồn, như một tấm gương phản chiếu tất cả những sự thật. Linh hồn ở đây như một cánh chim bay lên giữa bầu trời cao vời vợi, không vướng bận vào những tình cảm, mối quan hệ hay nỗi lo toan, mà chỉ đơn giản là thực tại và hòa hợp với vũ trụ."
},
{ //61
  ten: "Truy Cầu",
  bietDanh: "Cõi Tìm Kiếm – Sự Khám Phá Mãi Mãi",
  tangGioi: "Lý Thú – Khao Khát – Nỗi Đau Tâm Hồn",
  vaiTro: "Địa Cầu Truy Cầu là cõi của tìm kiếm, khám phá và khát vọng. Đây là nơi các linh hồn không ngừng chạy theo những giấc mơ, mục tiêu và khám phá chân lý, nhưng không bao giờ thật sự đạt được. Họ luôn cảm thấy thiếu vắng điều gì đó, hoặc mãi vật lộn để tìm kiếm một cái gì đó không thể nắm bắt được. Địa Cầu này phản ánh cuộc sống đầy khát vọng của con người, nơi mỗi linh hồn không ngừng tìm kiếm sự hoàn thiện, hạnh phúc, và nghĩa vụ nhưng lại luôn cảm thấy thiếu thốn. Tuy nhiên, đây cũng chính là nơi linh hồn nhận ra rằng trong hành trình truy cầu, sự hòa hợp nội tâm mới chính là chìa khóa để đạt được sự thỏa mãn đích thực.",
  hinhAnh: "Một cánh đồng rộng lớn, bao la không thấy bờ, với những đoạn đường dài dẫn tới horizon xa tít. Dưới chân mỗi linh hồn là một ngọn đèn nhỏ le lói, phản chiếu những ước mơ và khao khát. Những con đường không bao giờ kết thúc như một sự phản ánh của hành trình vô tận tìm kiếm ý nghĩa, nơi mà dù bước đi bao lâu, sự khát khao vẫn không bao giờ dập tắt, và cảnh vật thay đổi liên tục, mỗi ngã rẽ lại dẫn tới một mục tiêu mới, chưa bao giờ đạt được."
},
{ //62
  ten: "Hội Ngộ",
  bietDanh: "Cõi Tụ Họp – Nơi Linh Hồn Gặp Gỡ",
  tangGioi: "Giao Thoa – Hợp Nhất – Đồng Cảm",
  vaiTro: "Địa Cầu Hội Ngộ là cõi của gặp gỡ, hợp nhất và kết nối. Đây là nơi mà các linh hồn tìm thấy sự hòa hợp, không chỉ với bản thân mà còn với những linh hồn khác. Tại đây, mỗi cuộc gặp gỡ không chỉ là sự tình cờ mà là một phần của kế hoạch lớn lao, nơi mọi linh hồn đều đóng vai trò quan trọng trong việc hỗ trợ và kết nối lẫn nhau. Địa Cầu này là bài học về cộng sinh và đoàn kết, về sự hiểu biết và chia sẻ sâu sắc giữa các linh hồn, bất chấp sự khác biệt về quá khứ và hành trình của từng người. Linh hồn khi trải qua Địa Cầu Hội Ngộ sẽ hiểu được rằng trong vũ trụ bao la, mỗi kết nối đều mang lại một sự thay đổi quan trọng, và sức mạnh của tình thương chính là yếu tố quan trọng để hướng tới sự tiến hóa chung.",
  hinhAnh: "Một đại hội linh hồn, nơi những ngôi sao sáng từ khắp nơi trong vũ trụ tụ hội về một không gian không có ranh giới. Những đám mây nhẹ nhàng vẽ nên những hình ảnh giao thoa, từng linh hồn chạm vào nhau như những chùm sáng hòa quyện, tạo thành một vòng xoáy vô tận của sự hiểu biết và chấp nhận. Những đoàn kết vĩnh cửu tạo ra một không gian ấm áp, nơi mọi linh hồn đều cảm nhận được tình yêu thương và sự thấu hiểu mà không cần lời nói."
},
{ //63
  ten: "Thử Lửa",
  bietDanh: "Cõi Kiểm Nghiệm – Lò Luyện Ý Chí",
  tangGioi: "Khổ Luyện – Thực Hành – Ý Thức Tỉnh",
  vaiTro: "Địa Cầu Thử Lửa là cõi của khổ luyện và thử thách, nơi linh hồn phải trải qua những giai đoạn thử nghiệm gian khổ để tôi rèn bản thân. Tại đây, mỗi linh hồn phải đối diện với nghiệp lực chưa giải quyết và bản ngã chưa thức tỉnh. Những thử thách ở đây không chỉ đến từ ngoại cảnh mà chủ yếu xuất phát từ chính sự dằn vặt nội tâm, nơi linh hồn phải đương đầu với nỗi sợ hãi và nghi ngờ của chính mình. Linh hồn không thể tránh né, không thể tìm ra con đường dễ dàng – tất cả đều phải vượt qua qua sự khổ luyện và thử thách để chứng minh sức mạnh của ý chí và tinh thần. Địa Cầu này là bài học về sự kiên trì, vượt qua giới hạn và khám phá chính mình qua mỗi thử thách mà linh hồn phải đối mặt.",
  hinhAnh: "Một lò lửa khổng lồ, với những ngọn lửa cháy bùng lên không ngừng. Những bức tường đá vững chãi, những đợt sóng nóng phả vào mặt, từng linh hồn đi qua vùng đất khô cằn và phải trải qua những thử thách khắc nghiệt, nơi nghiệp chướng hiện lên thành hình thù vặn vẹo, sẵn sàng đốt cháy bất kỳ linh hồn nào chưa đủ kiên cường. Dưới bầu trời đỏ rực, ánh sáng từ những ngôi sao xa xôi chiếu sáng lối đi, nhưng linh hồn chỉ có thể đi qua khi dám đối diện và vượt qua ngọn lửa thử thách đó."
},
{ //64
  ten: "Giải Thoát",
  bietDanh: "Cõi An Lạc – Cửa Ngõ Tự Do",
  tangGioi: "Vô Ngã – Tự Do Tâm Linh",
  vaiTro: "Địa Cầu Giải Thoát là cõi của sự giải phóng và tự do tinh thần, nơi linh hồn trải qua quá trình giải thoát khỏi mọi ràng buộc, cả về vật chất và tinh thần. Tại đây, linh hồn không còn bị chi phối bởi nghiệp lực hay bản ngã. Mọi sự khổ đau đã được giải phóng, và chỉ còn lại sự thanh thản, tĩnh lặng, là nơi linh hồn có thể cảm nhận được sự hòa hợp với vũ trụ. Linh hồn trong Địa Cầu này nhận thức được vô ngã và sự tự do từ việc thoát khỏi mọi trói buộc của tâm thức, thể hiện sự giải thoát thực sự trong cõi vĩnh hằng. Đây là cõi mà linh hồn thấu hiểu chân lý, sống trong giới hạn của chính mình và vươn tới sự tự do tuyệt đối, không còn sự phân biệt, không còn đối kháng.",
  hinhAnh: "Một không gian tĩnh lặng, ánh sáng dịu nhẹ bao phủ khắp nơi, mọi vật đều mờ ảo nhưng đầy thanh thoát. Từng đám mây trắng trôi nhẹ nhàng trên bầu trời xanh, những ngôi sao như viên ngọc sáng chói trong một vũ trụ vô tận. Linh hồn không còn bị trói buộc vào bất kỳ điều gì, chỉ có sự tự do và hòa nhập với mọi thứ. Mọi vật thể đều mờ nhạt, như thể không có hình dạng rõ ràng, chỉ còn lại sự thanh tịnh trong một không gian vĩnh cửu."
},
{ //65
  ten: "U Minh",
  bietDanh: "Cõi Vô Minh – Vùng Tối Tăm",
  tangGioi: "Mê Muội – Mù Quáng",
  vaiTro: "Địa Cầu U Minh là nơi linh hồn phải đối diện với vô minh, sự mù quáng và không biết về bản chất thật của vũ trụ. Đây là cõi mà linh hồn bị bao trùm trong tối tăm, mờ mịt, không thể nhìn thấy rõ ràng con đường đi. Địa Cầu này là một thử thách lớn, nơi linh hồn phải vượt qua những ảo tưởng và sự che đậy trong tâm thức để tìm lại ánh sáng. Tại đây, linh hồn phải trải qua quá trình tự nhận thức, đối diện với chính sự tối tăm của mình để thức tỉnh khỏi vô minh, đi tìm ánh sáng chân lý. Địa Cầu U Minh là nơi của khổ đau, nhưng cũng là nơi có thể giải thoát, nếu linh hồn đủ kiên nhẫn và tinh tấn trên con đường giác ngộ.",
  hinhAnh: "Một thế giới u ám, những đám mây đen cuồn cuộn che phủ bầu trời, ánh sáng yếu ớt không thể xuyên qua. Những đoạn đường mờ mịt dẫn tới những nơi không rõ ràng, lối đi bị che khuất bởi sương mù dày đặc. Linh hồn di chuyển trong bóng tối, cảm nhận sự mờ mịt, không thấy rõ phía trước. Chỉ khi có đủ lòng kiên trì, một vầng sáng nhỏ xuất hiện từ trong đêm tối, dẫn dắt linh hồn tiến về phía trước, qua những thử thách và đau khổ để tìm thấy con đường ánh sáng."
},
{ //66
  ten: "Tịnh Tâm",
  bietDanh: "Cõi Thanh Tịnh – Tâm Hòa Bình",
  tangGioi: "Bình An – Hòa Hợp",
  vaiTro: "Địa Cầu Tịnh Tâm là nơi linh hồn trải qua quá trình tĩnh lặng và hòa hợp với vũ trụ, đạt được sự thanh tịnh và an lạc trong tâm hồn. Tại đây, mọi phiền muộn, lo âu, và vướng mắc trong lòng đều được hóa giải. Linh hồn không còn bị cuốn theo ham muốn, cảm xúc tiêu cực mà thay vào đó, đạt đến một trạng thái thanh thản, không vướng bận. Đây là cõi thanh tịnh tuyệt đối, nơi linh hồn có thể quay về với bản chất nguyên thủy của mình, trải nghiệm một sự hài hòa hoàn hảo giữa tâm và vũ trụ. Địa Cầu Tịnh Tâm không phải là một nơi dễ dàng đạt được, mà là một thử thách đối với những ai tìm kiếm sự thực hành nội tâm sâu sắc, nơi mà mọi linh hồn phải vượt qua bản ngã và đi đến sự giải thoát hoàn toàn khỏi mọi tạp niệm.",
  hinhAnh: "Một cảnh quan thanh bình, những cánh đồng bao la, mặt hồ phẳng lặng phản chiếu bầu trời trong vắt. Cảnh vật yên ả không có bất kỳ xáo động nào, gió nhẹ lướt qua lá cây, tạo ra một âm thanh nhẹ nhàng, như một bản nhạc du dương. Mặt trời chiếu sáng, không chói chang mà dịu dàng, bao phủ mọi thứ trong ánh sáng êm ái, khiến linh hồn cảm nhận được hòa hợp hoàn toàn với thiên nhiên. Không gian này tĩnh lặng đến mức linh hồn cảm nhận được chính nhịp thở của vũ trụ, những cảm giác bình yên lan tỏa trong tâm hồn, như thể được đắm mình trong vĩnh hằng."
},
{ //67
  ten: "Tái Hòa",
  bietDanh: "Cõi Hòa Nhập – Nơi Tâm Hồn Tái Sinh",
  tangGioi: "Hòa Bình – Tái Tạo",
  vaiTro: "Địa Cầu Tái Hòa là một không gian nơi linh hồn trải qua quá trình hòa nhập và tái sinh, vượt qua những mâu thuẫn và xung đột nội tâm để đạt được trạng thái hòa hợp giữa các yếu tố trái ngược. Tại đây, linh hồn phải trải qua quá trình chữa lành sâu sắc, nơi mọi vết thương tinh thần được khôi phục, và sự hòa bình nội tâm được tái tạo. Cõi này tượng trưng cho sự tái sinh và sự tái hòa nhập giữa linh hồn và vũ trụ, nơi những mâu thuẫn trong quá khứ được giải quyết, và linh hồn có thể tìm lại sự cân bằng giữa những yếu tố đối lập. Địa Cầu Tái Hòa không phải là nơi để tránh né những đau khổ hay khó khăn, mà là nơi để đối diện và tái tạo lại mọi thứ, biến những tổn thương trở thành nền tảng cho sự hòa bình và tự do vĩnh cửu.",
  hinhAnh: "Một cảnh quan hoang sơ nhưng đầy sức sống, nơi những dòng suối trong vắt hòa vào đất, cây cỏ xanh tươi mọc lên từ những đống đổ nát cũ kỹ. Mặt trời mọc lên từ phía chân trời, chiếu rọi ánh sáng mới vào một thế giới đã được tái sinh. Không khí trong lành, đầy sức sống, và mọi sinh vật tại đây đều thể hiện sự hòa hợp giữa vạn vật. Từng cơn gió nhẹ nhàng thổi qua cánh đồng, mang theo âm thanh dịu nhẹ, như thể bầu không khí đang khôi phục lại những gì đã mất, tạo ra một cảm giác thanh thản và hòa bình tuyệt đối."
},
{ //68
  ten: "Địa Cầu Xanh (Trái Đất)",
  bietDanh: "Cõi Tự Nhiên – Nơi Hòa Nhập với Vạn Vật",
  tangGioi: "Tự Nhiên – Sự Sống",
  vaiTro: "Địa Cầu Xanh là cõi đất nơi mà sự sống phát triển mạnh mẽ dưới mọi hình thức, từ cây cỏ, sinh vật đến con người. Đó là cõi mà linh hồn trải qua hành trình hòa nhập và tương tác với vạn vật. Đây là một cõi có tính chất sinh học mạnh mẽ, nơi tất cả các sinh vật cùng sinh tồn, đấu tranh để duy trì sự sống và bảo vệ môi trường tự nhiên. Tại Địa Cầu Xanh, linh hồn học cách hòa hợp với vũ trụ thông qua việc chăm sóc và nuôi dưỡng sự sống. Đây là một trường học của tự nhiên, nơi linh hồn có thể khám phá các nguyên lý tự nhiên, học hỏi về sự sống và cái chết, về sự thay đổi và phát triển. Cõi này giúp linh hồn nhận thức được giá trị của cân bằng sinh thái và vai trò của con người trong việc bảo tồn môi trường tự nhiên, từ đó làm phong phú thêm tri thức và nhận thức toàn cầu.",
  hinhAnh: "Một hành tinh xanh bao phủ bởi đại dương rộng lớn, những dãy núi hùng vĩ và những cánh rừng rậm rạp đầy sinh khí. Cảnh vật tại đây có sự hòa hợp tuyệt vời giữa thiên nhiên và con người, nơi mà mọi sinh vật sống đều hòa nhịp với nhau trong sự tôn trọng lẫn nhau. Những cánh đồng lúa xanh mơn mởn, những con sông dài uốn lượn, và những ngọn núi phủ đầy tuyết thể hiện vẻ đẹp của tự nhiên, trong khi những con người tại đây đang chung tay gìn giữ và bảo vệ hành tinh khỏi sự phá hủy. Địa Cầu Xanh là nơi mọi thứ có thể phát triển và thay đổi theo quy luật tự nhiên, nhưng cũng là nơi nhắc nhở về trách nhiệm bảo vệ hành tinh của mỗi linh hồn."
},
{ //69
  ten: "Địa Cầu Hồi Ảnh",
  bietDanh: "Cõi Phản Chiếu – Nơi Linh Hồn Gặp Lại Quá Khứ",
  tangGioi: "Thời Gian – Nhớ Nhung – Ký Ức",
  vaiTro: "Địa Cầu Hồi Ảnh là một cõi mà linh hồn có thể trở lại với quá khứ của chính mình, nơi mà những ký ức, sự kiện đã qua được phản chiếu lại một cách rõ nét, như thể chúng đang diễn ra trước mắt. Tại đây, linh hồn sẽ trải qua một hành trình hồi tưởng, đối diện với những ký ức, quyết định, và cảm xúc của quá khứ mà họ chưa thể giải quyết hoặc hiểu rõ. Cõi này mang đến một cơ hội chữa lành cho những vết thương trong tâm hồn, bởi khi linh hồn gặp lại những khoảnh khắc đã qua, họ có thể thay đổi cách nhìn nhận và làm mới lại những trải nghiệm. Mỗi lần đối diện với hồi ức là một lần linh hồn có cơ hội tiến hóa, giải phóng những nỗi đau cũ, và từ đó hướng tới một tương lai sáng hơn.",
  hinhAnh: "Một thế giới mờ ảo với những mảng ký ức đang trôi nổi trong không gian, giống như những tấm gương phản chiếu linh hồn. Mỗi bước đi trong cõi này sẽ mở ra những cánh cửa dẫn về quá khứ, với những cảnh tượng, hình ảnh và cảm xúc đã qua. Các linh hồn có thể nhìn thấy mình trong những khoảnh khắc khác nhau của cuộc đời, như thể họ đang bước vào các cảnh phim đã được quay lại, nhưng mỗi lần bước vào lại có sự thay đổi trong nhận thức. Cảnh vật và thời gian tại đây không cố định – chúng luôn thay đổi, đôi khi rất rõ ràng, đôi khi lại trở nên mơ hồ, phản chiếu theo tâm trạng và cảm xúc của linh hồn."
},
{ //70
  ten: "Địa Cầu Chuông Gọi",
  bietDanh: "Cõi Âm Thanh Cổ Xưa – Tiếng Gọi Từ Vũ Trụ",
  tangGioi: "Âm Thanh – Cảm Nhận – Khám Phá",
  vaiTro: "Địa Cầu Chuông Gọi là một cõi của những âm thanh vĩnh cửu, nơi mà mọi âm thanh, từ những tiếng chuông vang vọng đến tiếng gọi từ vũ trụ hay tiếng thì thầm của các linh hồn, đều chứa đựng thông điệp và sự thức tỉnh. Tại đây, linh hồn phải học cách lắng nghe và hiểu những âm thanh đó, những tiếng gọi từ những chiều không gian khác nhau, để có thể thấu hiểu và kết nối với bản chất sâu thẳm trong chính mình và trong vũ trụ rộng lớn. Cõi này không chỉ là về âm thanh mà còn về sự chuyển động của chúng. Mỗi âm thanh tại Địa Cầu này sẽ kích hoạt các chuyển hóa nội tâm, giúp linh hồn giải thoát khỏi những bế tắc trong tâm trí và tìm thấy sự hài hòa giữa tinh thần và thể xác. Đây là nơi âm thanh không chỉ là tiếng vọng, mà là nguồn gốc của sự sáng tạo, giúp linh hồn khai mở khả năng thấu hiểu và khám phá những bí mật của vũ trụ.",
  hinhAnh: "Một không gian mênh mông, nơi các đoàn chuông từ khắp các chiều không gian vang vọng, mang theo những âm thanh huyền bí, lạ lẫm, từ rất xa, như thể chúng được phát ra từ chính trái tim của vũ trụ. Các âm thanh không chỉ là sóng âm mà còn là những dòng năng lượng có thể thay đổi không gian xung quanh. Thỉnh thoảng, có những tiếng gọi mơ hồ vang lên, như đang mời gọi linh hồn khám phá những chiều sâu mới. Cảnh vật xung quanh như được bao phủ bởi một lớp sương mù nhẹ nhàng, với những hình ảnh mờ ảo trôi nổi trong không gian, và mọi thứ đều bị ảnh hưởng bởi âm thanh xung quanh, làm cho không gian trở nên sống động, nhưng cũng hư ảo."
},
{ //71
  ten: "Địa Cầu Tử Môn",
  bietDanh: "Cõi Cửa Tử – Ngưỡng Cửa Sinh Tử",
  tangGioi: "Sinh Tử – Chết – Tái Sinh",
  vaiTro: "Địa Cầu Tử Môn là cửa ngõ của sinh tử, nơi mà linh hồn phải đối diện với sự chuyển tiếp giữa sự sống và cái chết. Đây là một không gian mà các linh hồn phải trải qua những thử thách khắc nghiệt để hóa giải nghiệp lực và tiến hóa qua chu kỳ tái sinh. Cõi này không chỉ là cái chết mà là một phần trong quá trình thức tỉnh của linh hồn, để hiểu rằng cái chết không phải là kết thúc mà là một sự chuyển mình, một bước ngoặt dẫn đến hồi sinh. Linh hồn phải đối diện với những nỗi sợ hãi sâu thẳm, những tiếc nuối, những vướng mắc trong quá khứ, và chỉ khi giải thoát được chúng, linh hồn mới có thể mở ra cánh cửa tử môn để bước vào một hành trình mới. Địa Cầu Tử Môn cũng là nơi mà linh hồn học cách buông bỏ những vướng bận của thế gian, và chấp nhận rằng trong sự sống và cái chết luôn tồn tại một quá trình vĩnh cửu. Đây là không gian của cảnh tỉnh, nơi linh hồn nhận thức rằng sự giải thoát chỉ đến khi họ vượt qua được mọi rào cản của tự thân.",
  hinhAnh: "Một cánh cửa hùng vĩ, mở ra giữa một khung cảnh tối tăm, nơi ánh sáng và bóng tối giao thoa, những bóng hình mờ ảo của các linh hồn đang vật lộn với những ký ức quá khứ. Cánh cửa này không phải là nơi mà linh hồn có thể bước qua dễ dàng, mà phải trải qua một cuộc kiểm tra tinh thần nghiêm ngặt. Bên cạnh cánh cửa, có những hình ảnh mờ ảo của những sinh linh vừa ra đi, những ký ức của cuộc sống trần gian vẫn còn vương vấn trong không gian, như những đám mây đen lơ lửng, chưa tan đi. Khi linh hồn tiến lại gần cửa, một ánh sáng mờ nhạt phát ra từ trong cánh cửa, mời gọi linh hồn bước qua để bước vào một không gian mới, nhưng chỉ khi thực sự sẵn sàng, họ mới có thể mở cửa và bước vào chuyến hành trình mới."
},
{ //72
  ten: "Địa Cầu Phục Sinh",
  bietDanh: "Cõi Vĩnh Hằng – Hồi Sinh Từ Cái Chết",
  tangGioi: "Tái Sinh – Sinh Mệnh – Thần Linh",
  vaiTro: "Địa Cầu Phục Sinh là nơi mà linh hồn sau khi trải qua cái chết và những thử thách của các cõi sinh tử, giờ đây sẽ bước vào một quá trình phục sinh. Đây là cõi vĩnh hằng, nơi linh hồn được hồi sinh, chữa lành, và tái tạo để có thể trở lại với một bản ngã mới, một thế giới mới. Linh hồn ở Địa Cầu Phục Sinh được trải qua quá trình thanh tẩy và thăng hoa, các vết thương tinh thần được chữa lành, và những khổ đau của quá khứ sẽ được giải phóng. Tại đây, linh hồn nhận thức rõ ràng hơn về mục đích của cuộc đời và vai trò của mình trong vũ trụ vĩnh hằng. Cái chết không còn là kết thúc, mà là một phần của quá trình tái sinh và hòa nhập với năng lượng vũ trụ. Đây là bước cuối cùng trong hành trình, nơi linh hồn đã trở thành hoàn thiện và có thể bước vào một chu kỳ mới của sự sống, mang trong mình sự hài hòa, trí tuệ và tình yêu vô biên.",
  hinhAnh: "Một cảnh vật tráng lệ, nơi ánh sáng hòa quyện với khói mờ, như ánh hoàng hôn chiếu rọi trên một thảo nguyên rộng lớn, nơi các linh hồn đang bước ra từ những ngôi mộ cũ, thở lại sự sống trong cơ thể mới. Các dòng sông tỏa sáng với ánh sáng vàng rực rỡ, những cánh hoa tái sinh mọc lên từ mặt đất. Cảnh vật xung quanh đều là biểu tượng của sự phục sinh, với những đoạn đường trải đầy hoa tươi và ánh sáng lấp lánh. Mỗi linh hồn ở đây đều mang một ánh nhìn đầy hy vọng và tràn đầy sức sống, sẵn sàng bước vào một cuộc đời mới, không còn gánh nặng của quá khứ."
}
  // Thêm các địa cầu khác...
];
