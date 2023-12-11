const storeList = {
    연희DT점: [
        '인천광역시 서구 서곶로 265',
    ],
    인천계산DT점: [
        '인천광역시 계양구 계산동 오조산로 39',
    ],
    삼산DT점: [
        '인천광역시 부평구 삼산1동 장제로 380',
    ],
    구월아시아드DT: [
        '인천광역시 남동구 남동대로 724',
    ],
    동인천점: [
        '인천광역시 중구 우현로 85-1',
    ],
    인천청라DT점: [
        '인천광역시 서구 원창로 8',
    ],
    삼산DT점: [
        '인천광역시 부평구 삼산1동 장제로 380',
    ],
    인천구산DT점: [
        '인천광역시 부평구 삼산1동 장제로 380',
    ]
};

// HTML을 동적으로 생성하는 함수
function generateHTML() {
    const container = document.querySelector('.store-list');

    for (const [store, info] of Object.entries(storeList)) {
        const storeAddress = document.createElement('li');
        storeAddress.classList.add('store-item');

        const storeHeader = document.createElement('p');
        storeHeader.classList.add('store-header');
        storeHeader.textContent = store;
        storeAddress.appendChild(storeHeader);

        const detailsList = document.createElement('ul');
        detailsList.classList.add('store-contents');
        info.forEach(detail => {
            const detailItem = document.createElement('li');
            detailItem.textContent = detail;
            detailsList.appendChild(detailItem);
        });

        storeAddress.appendChild(detailsList);
        container.appendChild(storeAddress);
    }
}

// 페이지 로드 시 HTML 생성 함수 호출
window.onload = generateHTML;