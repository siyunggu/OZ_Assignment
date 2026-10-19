const display = document.getElementById('display');
const powerBtn = document.querySelector('.on-off');

let isOn = false;          // 전원 상태
let currentValue = '0';    // 현재 입력 중인 값
let previousValue = null;  // 연산자 누르기 전 값
let currentOperator = null;
let shouldReset = false;   // 다음 숫자 입력 시 화면을 새로 시작할지 여부

// 처음엔 전원 OFF 상태 (화면 비움)
display.value = '';

function updateDisplay(value) {
    display.value = value;
}

function resetState() {
    currentValue = '0';
    previousValue = null;
    currentOperator = null;
    shouldReset = false;
}

function togglePower() {
    isOn = !isOn;
    powerBtn.classList.toggle('on', isOn);
    resetState();
    updateDisplay(isOn ? '0' : '');
}

function clearDisplay() {
    if (!isOn) return;
    resetState();
    updateDisplay('0');
}

function appendNumber(num) {
    if (!isOn) return;

    if (shouldReset) {
        currentValue = '0';
        shouldReset = false;
    }

    if (num === '.') {
        if (currentValue.includes('.')) return;  // 소수점 중복 방지
        currentValue += '.';
    } else if (currentValue === '0') {
        currentValue = num;                      // 앞자리 0 제거
    } else {
        currentValue += num;
    }
    updateDisplay(currentValue);
}

function appendOperator(op) {
    if (!isOn) return;

    // 연산자를 연속으로 누르면 연산자만 교체
    if (currentOperator !== null && shouldReset) {
        currentOperator = op;
        return;
    }

    // 연속 계산 (예: 2 + 3 + → 먼저 5를 계산)
    if (currentOperator !== null && !shouldReset) {
        const result = calculate(previousValue, currentValue, currentOperator);
        if (result === 'Error') {
            showError();
            return;
        }
        currentValue = result;
        updateDisplay(currentValue);
    }

    previousValue = currentValue;
    currentOperator = op;
    shouldReset = true;
}

function performCalculate() {
    if (!isOn) return;
    if (currentOperator === null || shouldReset) return;  // 계산할 게 없으면 무시

    const result = calculate(previousValue, currentValue, currentOperator);
    if (result === 'Error') {
        showError();
        return;
    }

    currentValue = result;
    updateDisplay(currentValue);
    previousValue = null;
    currentOperator = null;
    shouldReset = true;  // 결과 뒤에 숫자를 누르면 새로 시작
}

function calculate(a, b, op) {
    const x = parseFloat(a);
    const y = parseFloat(b);
    let result;

    switch (op) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '*': result = x * y; break;
        case '/':
            if (y === 0) return 'Error';  // 0으로 나누기 방지
            result = x / y;
            break;
        default: return b;
    }

    // 부동소수점 오차 보정 (0.1 + 0.2 = 0.3)
    return String(Number(result.toPrecision(12)));
}

function showError() {
    resetState();
    shouldReset = true;
    updateDisplay('Error');
}