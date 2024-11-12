from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)

@app.route('/cadastroColetiva', methods=['GET', 'POST'])
def cadastroColetiva():
    if request.method == 'POST':
        # Redireciona para o cadastro do administrador após o envio do formulário
        return redirect(url_for('cadastroADM'))
    return render_template('cadastroColetiva.html')

@app.route('/cadastroADM')
def cadastroADM():
    return render_template('cadastroADM.html')

if __name__ == '__main__':
    app.run(debug=True)
    