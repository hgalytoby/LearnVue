class Base:
    Str = ""
    Int = 0
    List = []
    Dict = {}


class A(Base):
    mood = 'Happy'


class B(Base):
    mood = 'Devil'


print(A.__dict__)
a = A()

# a.__dict__.update({
#     'A': 'a',
#     'B': 'b'
# })
# print(a.__dict__)

