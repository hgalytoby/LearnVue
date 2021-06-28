import json

data = {
    'data': {
        'status': 200,
        'msg': 'ok',
        'films': [],
    },
}
image = ['https://i.imgur.com/fu2YVCe.jpeg',
         'https://i.imgur.com/miXBM0j.jpeg',
         'https://i.imgur.com/tncNssk.jpeg',
         'https://i.imgur.com/GjCZBei.jpeg',
         'https://i.imgur.com/Hrhn4KE.jpeg',
         'https://i.imgur.com/2iHGTL6.jpeg',
         'https://i.imgur.com/odi3NeM.jpg',
         'https://i.imgur.com/2AOiyJl.jpeg',
         'https://i.imgur.com/xzAIx04.jpg',
         'https://i.imgur.com/hpGfyO7.jpeg',
         ]
for i in range(10):
    data['data']['films'].append(
        {
            'filmsId': f'{i + 1}',
            'name': f'資料{i + 1}',
            'poster': image[i]
        })


# print(json.dumps(data))

# class A:
#     def __init__(self, a):
#         self.__a = "A: PRIVATE"
#         self.a = a
#
#     def __private(self):
#         return self.__a
#
#     def pub(self):
#         print(self.__private())
#
#
# class B(A):
#     def __init__(self):
#         super(B, self).__init__(self)
#         print(self.a)
#
#     def pub(self):
#         return
#
#     def foo(self):
#         super().pub()


# a = A(1).pub()
# B()


def get():
    return True, False


def put(x, y):
    print(x, y)


# put(get())

# get_data = get()

print(5 / 4)
print(5 % 4)
