// 轮播图功能

    const sliderData = [
        {url: './images/banner1.png'},
        {url: './images/banner2.png'},
        {url: './images/banner3.png'},
        {url: './images/banner4.png'},
        {url: './images/banner6.png'},
        {url: './images/banner7.png'},
        {url: './images/banner8.png'},
    ];

    const img = document.querySelector('.banner-img img');
    let i = 0;

    setInterval(function() {
        i++;
        if (i >= sliderData.length) {
            i = 0;
        }
        img.src = sliderData[i].url;
    }, 2000);


// Accordion 功能
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = button.classList.contains('active');

        // 关闭所有打开的Accordion
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.style.display = 'none';
        });
        document.querySelectorAll('.accordion-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // 切换当前Accordion
        if (!isActive) {
            content.style.display = 'block';
            button.classList.add('active');
        }
    });
});

// 鼠标经过图片，让图片显示大图。
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const largeImage = card.querySelector('.large-image');
        if (largeImage) {
            largeImage.style.display = 'block';
        }
    });

    card.addEventListener('mouseleave', () => {
        const largeImage = card.querySelector('.large-image');
        if (largeImage) {
            largeImage.style.display = 'none';
        }
    });
});