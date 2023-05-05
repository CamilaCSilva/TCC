def cpf_valido(numero_do_cpf):
    return len(numero_do_cpf) == 11

def nome_valido(nome):
    return nome.isalpha()

def telefone_valido(telefone):
    return len(telefone) < 11