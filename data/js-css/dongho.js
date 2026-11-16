        function updateDateTime() {
            const now = new Date();
            const gio = String(now.getHours()).padStart(2, '0');
            const phut = String(now.getMinutes()).padStart(2, '0');
            const giay = String(now.getSeconds()).padStart(2, '0');
            const ngay = now.getDate();
            const thang = now.getMonth() + 1;
            const nam = now.getFullYear();

            document.getElementById('datetime').textContent = 
                `${gio}:${phut}:${giay} — Ngày ${ngay} Tháng ${thang} Năm ${nam}`;
        }

        // Chạy ngay và cập nhật mỗi giây
        updateDateTime();
        setInterval(updateDateTime, 1000);


