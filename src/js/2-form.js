const email = document.querySelector("input");
email.className = "email";

const message = document.querySelector("textarea");
message.className = "message";

const button = document.querySelector("button")
button.className = "submit"

const feedbackForm = document.querySelector(".js-feedback-form");
let formData = {
    email: '',
    message: '',
};

const fillFormFields = () => {
    try {
        if (localStorage.length === 0) {
            return;
        }

        const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

        formData = formDataFromLS;

        for (const key in formDataFromLS) {
            feedbackForm.elements[key].value = formDataFromLS[key];
        }
    } catch (err) {
        console.log(err);
    }
};

fillFormFields();

const fieldChange = event => {
    const { target: formFieldEl } = event;
    const fieldValue = formFieldEl.value;
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
    event.preventDefault();

    if (formData.email.length === 0 || formData.message.length === 0) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    const {currentTarget: formEl} = event;
    formEl.reset();  
    formData = {
        email: '',
        message: '',
    };
    localStorage.removeItem('feedback-form-state');
};

feedbackForm.addEventListener('input', fieldChange);
feedbackForm.addEventListener('submit', onFormSubmit);