const targetDate = new Date("2023-12-31T23:59:59").getTime();

        function updateCountdown() {
            const currentDate = new Date().getTime();
            const timeRemaining = targetDate - currentDate;

            if (timeRemaining <= 0) {
                document.getElementById("countdown").textContent = "Countdown Expired";
            } else {
                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                const formattedTime = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                document.getElementById("countdown").textContent = formattedTime;
            }
        }

        setInterval(updateCountdown, 1000);