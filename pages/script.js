const carousel = document.querySelector('.carousel');
        const carouselItems = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        let carouselInterval = startCarouselInterval();  // 초기에 타이머 시작

        // 초기에 첫 번째 슬라이드를 보여주도록 추가
        showSlide(currentIndex);

        function startCarouselInterval() {
            return setInterval(nextSlide, 6000);  // 6초 간격으로 자동 슬라이드
        }

        function showSlide(index) {
            const itemWidth = 100 / carouselItems.length;
            carousel.style.transform = `translateX(-${index * itemWidth}%)`;
            carouselItems.forEach(item => item.classList.remove('active'));
            carouselItems[index].classList.add('active');
            updateIndicator();

            // 타이머 초기화
            clearInterval(carouselInterval);
            carouselInterval = startCarouselInterval();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        }

        function goToSlide(index) {
            currentIndex = index;
            showSlide(currentIndex);
        }

        function updateIndicator() {
            const indicatorBars = document.querySelectorAll('.indicator-bar');
            indicatorBars.forEach((bar, index) => {
                bar.classList.toggle('active', index === currentIndex);
            });
        }

        function navigateToPage(url) {
            // 클릭된 버튼의 링크로 이동
            window.location.href = url;
        }
