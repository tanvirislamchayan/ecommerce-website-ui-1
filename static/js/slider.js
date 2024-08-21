document.querySelectorAll('.slider-section').forEach(section => {
    const left = section.querySelector('.left');
    const right = section.querySelector('.right');
    const slider = section.querySelector('.images');
    const images = section.querySelectorAll('.img');
    const bottom = section.querySelector('.bottom');
    
    let sliderNumber = 1;
    const length = images.length;

    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        div.className = 'dot-button';
        bottom.appendChild(div);
    }

    let buttons = bottom.querySelectorAll('.dot-button');
    const removeBg = () => {
        buttons.forEach(button => {
            button.style.backgroundColor = 'transparent';
            button.addEventListener('mouseenter', stopSlideShow);
            button.addEventListener('mouseleave', startSlideShow);
        });
    };
    buttons[0].style.backgroundColor = 'white';
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            slider.style.transform = `translateX(-${i * 100}%)`;
            sliderNumber = i + 1;
            removeBg();
            button.style.backgroundColor = 'white';
        });
    });

    const changeColor = () => {
        removeBg();
        buttons[sliderNumber - 1].style.backgroundColor = 'white';
    };

    const nextSlide = () => {
        slider.style.transform = `translateX(-${sliderNumber * 100}%)`;
        sliderNumber++;
    };
    const getFirstSlide = () => {
        slider.style.transform = `translateX(0px)`;
        sliderNumber = 1;
    };
    const prevSlide = () => {
        slider.style.transform = `translateX(-${(sliderNumber - 2) * 100}%)`;
        sliderNumber--;
    };
    const getLastSlide = () => {
        slider.style.transform = `translateX(-${(length - 1) * 100}%)`;
        sliderNumber = length;
    };

    right.addEventListener('click', () => {
        sliderNumber < length ? nextSlide() : getFirstSlide();
        changeColor();
    });

    left.addEventListener('click', () => {
        sliderNumber > 1 ? prevSlide() : getLastSlide();
        changeColor();
    });

    let SlideInterval;
    const startSlideShow = () => {
        SlideInterval = setInterval(() => {
            sliderNumber < length ? nextSlide() : getFirstSlide();
            changeColor();
        }, 6000);
    };

    const stopSlideShow = () => {
        clearInterval(SlideInterval);
    };

    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);
    left.addEventListener('mouseenter', stopSlideShow);
    left.addEventListener('mouseleave', startSlideShow);
    right.addEventListener('mouseenter', stopSlideShow);
    right.addEventListener('mouseleave', startSlideShow);

    startSlideShow();
});
