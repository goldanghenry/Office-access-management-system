console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

// 로그인 슬라이드
loginBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if(element !== "slide-up") {
            parent.classList.add('slide-up')
        }else{
            signupBtn.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

// 건의사항
signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
        if(element !== "slide-up") {
            parent.classList.add('slide-up')
        }else{
            loginBtn.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});


// 출입 정보 제출 버튼
document.getElementById("submitBtn").addEventListener("click", function() {
    var department = document.getElementById("department").value;
    var area = document.getElementById("area").value;
    var name = document.getElementById("name").value;
    var uniqueNumber = document.getElementById("uniqueNumber").value;
    var purpose = document.getElementById("purpose").value;

    var data = {
        department: department,
        area: area,
        name: name,
        uniqueNumber: uniqueNumber,
        purpose: purpose
    };

    fetch("/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function(response) {
            if (response.ok) {
                return response.text();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(responseText) {
            alert(responseText);
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

// 건의사항 제출 버튼
document.getElementById("sug_submitBtn").addEventListener("click", function() {
    var department = document.getElementById("sug_department").value;
    var area = document.getElementById("sug_name").value;
    var name = document.getElementById("name").value;
    var content = document.getElementById("sug_content").value;

    var data = {
        department: department,
        area: area,
        name: name,
        content: content
    };

    fetch("/sug-submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function(response) {
            if (response.ok) {
                return response.text();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(responseText) {
            alert(responseText);
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
