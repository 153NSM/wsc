function checkAnswer(answer) {

    if (answer === 1) {

        document.getElementById("result").innerHTML =
            '🎉 MISSION CLEAR!' +
            '<div class="code-title">첫 번째 비밀코드</div>' +
            '<div class="code-badge">1</div>';

    } else {

        document.getElementById("result").innerHTML =
            "❌ 다시 한번 전시품을 관찰해보세요.";

    }

}
