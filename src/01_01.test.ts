type UsersType = {
	[key: string]: { id: string, name: string }
}
let users: UsersType

beforeEach(() => {
	users = {
		'1': { id: '1', name: 'Cristian' },
		'2': { id: '2', name: 'david' },
		'3': { id: '3', name: 'joe' },
		'4': { id: '4', name: 'tom' },
		'5': { id: '5', name: 'qwe' },
		'6': { id: '6', name: 'op' },
		'7': { id: '7', name: 'name' },
		'8': { id: '8', name: 'Kate' },
	}
})

test('should update corresponding user', () => {
	users['8'].name = 'Ekaterina'
	expect(users['8']).toEqual({ id: '8', name: 'Ekaterina' })
})

test('should delete corresponding user', () => {
	delete users['8']
	expect(users[8]).toBeUndefined
})