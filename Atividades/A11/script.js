        function consultarCep() {
            const cep = document.getElementById('cep').value.replace('-', '');

            document.getElementById('logradouro').value = '';
            document.getElementById('bairro').value = '';
            document.getElementById('localidade').value = '';
            document.getElementById('uf').value = '';

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    document.getElementById('logradouro').value = data.logradouro || '';
                    document.getElementById('bairro').value = data.bairro || '';
                    document.getElementById('localidade').value = data.localidade || '';
                    document.getElementById('uf').value = data.uf || '';
                })
        }