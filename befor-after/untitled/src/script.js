// 요소 선택
const slider = document.getElementById('slider');
const beforeImg = document.getElementById('beforeImg');
const afterImg = document.querySelector('.after-img');
const beforeUpload = document.getElementById('beforeUpload');
const afterUpload = document.getElementById('afterUpload');

// 1. 슬라이더 움직임 처리 (이미지 자르기)
slider.addEventListener('input', (e) => {
    const value = e.target.value;
    // Before 이미지의 노출 범위를 슬라이더 값에 따라 조절
    beforeImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});

// 2. 파일 업로드 및 이미지 표시 로직
function setupImageUpload(inputElement, targetDisplayElement) {
    inputElement.addEventListener('change', function(event) {
        const file = event.target.files[0]; // 선택한 파일 가져오기
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                // 선택한 이미지를 배경으로 설정
                targetDisplayElement.style.backgroundImage = `url('${e.target.result}')`;
                // 이미지가 영역에 꽉 차도록 설정
                targetDisplayElement.style.backgroundSize = 'cover';
                targetDisplayElement.style.backgroundPosition = 'center';
            };
            
            reader.readAsDataURL(file); // 파일을 데이터 URL로 변환
        }
    });
}

// 비포 이미지 업로드 연결
setupImageUpload(beforeUpload, beforeImg);
// 애프터 이미지 업로드 연결
setupImageUpload(afterUpload, afterImg);