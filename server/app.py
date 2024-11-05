from flask import Flask, request, render_template, redirect, url_for
import sqlite3

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('database.sqlite')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS coletivas (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nome_fantasia TEXT NOT NULL,
                        cnpj TEXT NOT NULL UNIQUE,
                        ddd TEXT NOT NULL,
                        telefone TEXT NOT NULL,
                        email TEXT NOT NULL UNIQUE,
                        senha TEXT NOT NULL)''')
    conn.commit()
    conn.close()

@app.route('/cadastroColetiva', methods=['GET', 'POST'])
def cadastroColetiva():
    if request.method == 'POST':
        nome_fantasia = request.form['nome_fantasia']
        cnpj = request.form['cnpj']
        ddd = request.form['ddd']
        telefone = request.form['telefone']
        email = request.form['email']
        senha = request.form['senha']

        conn = sqlite3.connect('database.sqlite')
        cursor = conn.cursor()
        cursor.execute('INSERT INTO coletivas (nome_fantasia, cnpj, ddd, telefone, email, senha) VALUES (?, ?, ?, ?, ?, ?)',
                       (nome_fantasia, cnpj, ddd, telefone, email, senha))
        conn.commit()
        conn.close()
        return redirect(url_for('cadastroColetiva'))

    return render_template('cadastroColetiva.html')

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
