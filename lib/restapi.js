class RestApi {
	//用户数据示例
	users = [{
			id: '1',
			name: 'Apache',
			password: '123',
			avatar: 'https://wangzhenghai-oss.oss-cn-hangzhou.aliyuncs.com/c6332e3d-aa67-4b67-8ea8-c0cfaea91dcc.png',
			email: 'Mattie@goeasy.io',
			phone: '138xxxxxxxx',
		},
		{
			id: '2',
			name: '咸鱼味的猫.',
			password: '123',
			avatar: 'https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1687750546424-6719506.jpeg',
			email: 'Wallace@goeasy.io',
			phone: '138xxxxxxxx',
		},
		{
			id: '3',
			name: '香菜不加辣y',
			password: '123',
			avatar: 'https://diancan-1252107261.cos.accelerate.myqcloud.com/lvyou/1687314827656-9188889.jpg',
			email: 'Tracy@goeasy.io',
			phone: '138xxxxxxxx',
		},
		{
			id: '4',
			name: '柔荑',
			password: '123',
			avatar: 'https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=3231423734',
			email: 'Juanita@goeasy.io',
			phone: '138xxxxxxxx',
		},
	];
	//群数据示例
	groups = [{
		id: 'group-a42b-47b2-bb1e-15e0f5f9a19a',
		name: '小程序交流群',
		avatar: 'https://q2.qlogo.cn/headimg_dl?spec=100&dst_uin=3231423734',
		userList: [
			'1',
			'2',
			'3',
			'4',
			'5',
		]
	}];
	findUsers() {
		return this.users;
	};

	findFriends(user) {
		return this.users.filter((v) => v.id !== user.id);
	}

	findGroups(user) {
		return this.groups.filter((v) => v.userList.find((id) => id === user));
	}

	findUser(username, password) {
		return this.users.find((user) => user.name === username && user.password === password);
	}

	getOrderList() {
		return this.orders;
	}

	findGroupById(groupId) {
		return this.groups.find((group) => group.id === groupId);
	}

	findUserById(userId) {
		return this.users.find((user) => user.id === userId);
	}

	findGroupMembers(groupId) {
		let members = [];
		let group = this.groups.find(v => v.id === groupId);
		if (group) {
			members = this.users.filter(user => group.userList.includes(user.id));
		}
		return members;
	}
}

export default new RestApi();