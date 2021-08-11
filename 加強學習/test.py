def t():
    print('t')


def y():
    print('y')

a = 10
b = 30
print((t, y)[a > b]())
