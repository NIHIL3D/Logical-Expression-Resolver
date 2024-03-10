from sympy import *
from sympy.abc import A, B, C, D

def negation(x):
    return str(Not(sympify(x)))

def cleaning(c) :
    tv = 0
    t = 0
    if c[0] == "|" or c[0] == "&":
        c = c[1:]
    if c[-1] == "|" or c[-1] == "&":
        c = c[:-1]
    for i in range(len(c)) :
        if c[i] == "|":
            tv +=1
            if tv == 2 and c[i] == "|" :
                c = c[:i] + " " + c[i+1:]
                tv = 0
        elif c[i] == "&":
            t +=1
            if t == 2 and c[i] == "&" :
                c = c[:i] + " " + c[i+1:]
                t = 0
        else :
            tv = 0
            t = 0
    return c.replace(" ", "")
output = {}
def process(S) :
    c1 = " "
    L = []
    for i in range(len(S)):
        for j in range(i+1, len(S)):
            if negation(S[i]) in S[j] :
                L.append(S[j])
                L.append(S[i])
                S[j] = S[j].replace(negation(S[i]), "")
                if len(S[j]) > 1 :
                    S[j] = cleaning(S[j])
                c1 = S[j]
                L.append(c1)
                output['steps'] += [L]
                L = []
                break;
            elif negation(S[j]) in S[i] :
                L.append(S[i])
                L.append(S[j])
                S[i] = S[i].replace(negation(S[j]), "")
                if len(S[i]) > 1 :
                    S[i] = cleaning(c2)
                c1 = S[i]
                L.append(c1)
                output['steps'] += [L]
                L = []
                break;
    if c1 == "": 
        output['result'] = "Valide"
    else :
        output['result'] = "Invalide"

def resolution(expression):
    cnf_expression = str(to_cnf(Not(sympify(expression)))).replace(" ", "")
    Sf = cnf_expression.split('&')
    
    for i in range(len(Sf)): 
        Sf[i] = str(simplify(sympify(Sf[i]))).replace(" ", "")
    output['SF'] = str(Sf)
    output['steps'] = []
    print(Sf)
    process(Sf)
    return output