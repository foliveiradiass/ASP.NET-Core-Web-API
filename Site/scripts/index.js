const v = new Vue({
    el: '#app',
    data: {
        title: 'Importação dos Dados de Aluno',
        loading: false,
        students: [],
        getStudentEndPoint: 'http://localhost:62897/api/student',
        importFileEndPoint: 'http://localhost:62897/api/student/import'
    },
    created() {
        this.getStudent();
    },
    methods: {
        //Get list student
        getStudent: function () {

            axios({ method: "GET", "url": this.getStudentEndPoint }).then(result => {
                this.students = result.data;
            }, error => {
                console.error(error);
            });
        },

        selectStudent: function (e) {
            console.log($(e.target))
        },

        formatDate: function (value) {
            return moment(String(value)).format('DD/MM/YYYY')
        },

        //Remove student
        removeStudent: function (id, nome) {
            if (confirm('Deseja remover o aluno "' + nome + '" ?')) {
                axios({ method: "DELETE", "url": this.getStudentEndPoint + '/' + id }).then(result => {
                    this.getStudent();
                }, error => {
                    alert('FALHA AO EXCLUIR')
                });
            }
        },

        //Import file
        submitFile: function () {

            let formData = new FormData();
            formData.append('file', this.file);

            axios.post(this.importFileEndPoint,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function () {
                alert('ARQUIVO IMPORTADO COM SUCESSO!');
            })
                .catch(function () {
                    alert('FALHA NA IMPORTAÇÃO');
                });
        },

        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        }
    }
});