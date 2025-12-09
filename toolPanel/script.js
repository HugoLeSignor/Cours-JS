const element = document.getElementById('element');

const sliders = {
    colorR: document.getElementById('colorR'),
    colorG: document.getElementById('colorG'),
    colorB: document.getElementById('colorB'),
    textColorR: document.getElementById('textColorR'),
    textColorG: document.getElementById('textColorG'),
    textColorB: document.getElementById('textColorB'),
    padding: document.getElementById('padding'),
    height: document.getElementById('height'),
    width: document.getElementById('width'),
    borderRadius: document.getElementById('borderRadius'),
    rotation: document.getElementById('rotation')
};

const values = {
    colorR: document.getElementById('colorRValue'),
    colorG: document.getElementById('colorGValue'),
    colorB: document.getElementById('colorBValue'),
    textColorR: document.getElementById('textColorRValue'),
    textColorG: document.getElementById('textColorGValue'),
    textColorB: document.getElementById('textColorBValue'),
    padding: document.getElementById('paddingValue'),
    height: document.getElementById('heightValue'),
    width: document.getElementById('widthValue'),
    borderRadius: document.getElementById('borderRadiusValue'),
    rotation: document.getElementById('rotationValue')
};

function updateElement() {
    const r = sliders.colorR.value;
    const g = sliders.colorG.value;
    const b = sliders.colorB.value;
    const textR = sliders.textColorR.value;
    const textG = sliders.textColorG.value;
    const textB = sliders.textColorB.value;
    const padding = sliders.padding.value;
    const height = sliders.height.value;
    const width = sliders.width.value;
    const borderRadius = sliders.borderRadius.value;
    const rotation = sliders.rotation.value;

    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    element.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    element.style.padding = `${padding}px`;
    element.style.height = `${height}px`;
    element.style.width = `${width}px`;
    element.style.borderRadius = `${borderRadius}px`;
    element.style.transform = `rotate(${rotation}deg)`;

    values.colorR.textContent = r;
    values.colorG.textContent = g;
    values.colorB.textContent = b;
    values.textColorR.textContent = textR;
    values.textColorG.textContent = textG;
    values.textColorB.textContent = textB;
    values.padding.textContent = padding;
    values.height.textContent = height;
    values.width.textContent = width;
    values.borderRadius.textContent = borderRadius;
    values.rotation.textContent = rotation;
}

Object.values(sliders).forEach(slider => {
    slider.addEventListener('input', updateElement);
});

updateElement();
