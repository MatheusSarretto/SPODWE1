document.addEventListener("DOMContentLoaded", () => {
    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const formulario = document.getElementById("formulario");

    function mascaraCPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }

    function mascaraTelefone(telefone) {
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');

        if (cpf.length !== 11) {
            return false;
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        let soma = 0;
        let resto;

        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;

        return true;
    }

    cpfInput.addEventListener("input", (e) => {
        e.target.value = mascaraCPF(e.target.value);
    });

    telefoneInput.addEventListener("input", (e) => {
        e.target.value = mascaraTelefone(e.target.value);
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const cpf = cpfInput.value;
        const email = document.getElementById("email").value;
        let formIsValid = true;

        if (!validarCPF(cpf)) {
            formIsValid = false;
            cpfInput.style.borderColor = "red";
            alert("CPF inválido");
        } else {
            cpfInput.style.borderColor = "";
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            formIsValid = false;
            document.getElementById("email").style.borderColor = "red";
            alert("Email inválido");
        } else {
            document.getElementById("email").style.borderColor = "";
        }

        if (formIsValid) {
            alert("Formulário enviado com sucesso!");
            formulario.reset();
        }
    });
});
