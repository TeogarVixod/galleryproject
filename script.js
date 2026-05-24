// ПРОСТОЙ СКРИПТ ДЛЯ ГАЛЕРЕИ

// Функция для подсчёта фотографий
function countPhotos() {
    // ИСПРАВЛЕНО: ищем .image-card вместо .photo
    let photos = document.querySelectorAll('.image-card');
    // ИСПРАВЛЕНО: ищем #image-counter вместо #count
    let counter = document.getElementById('image-counter');
    
    if (counter) {
        counter.textContent = photos.length;
    }
    
    console.log('Найдено фотографий:', photos.length);
}

// Функция для работы с лайками
function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;
    
    // Для каждой кнопки лайка
    likeButtons.forEach(function(button) {
        // При клике на кнопку
        button.addEventListener('click', function() {
            // ИСПРАВЛЕНО: ищем .like-count вместо .likes
            let likesSpan = this.querySelector('.like-count');
            let currentLikes = parseInt(likesSpan.textContent) || 0;
            
            if (this.classList.contains('liked')) {
                // Убираем лайк
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
            } else {
                // Добавляем лайк
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }
            
            // Обновляем счётчики
            likesSpan.textContent = currentLikes;
            if (totalLikesElement) {
                totalLikesElement.textContent = totalLikes;
            }
            
            // Анимация
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
            
            console.log('Лайков всего:', totalLikes);
        });
    });
}

// Когда страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    console.log('Галерея загружена!');
    
    countPhotos();
    setupLikes();
    
    // Бонус: автоматически обновим год в футере, раз уж скрипт запущен
    let yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Показываем, что JavaScript работает
    setTimeout(function() {
        console.log('✅ JavaScript работает правильно!');
    }, 1000);
});