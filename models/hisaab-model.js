const mongoose = require('mongoose');

const hisaabSchema = mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			minLength: 3,
			maxLength: 100,
			required: true,
		},
		description: {},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		encrypted: {
			type: Boolean,
			default: false,
		},
		passcode: {
			type: Boolean,
			default: '',
		},
		shareable: {
			type: Boolean,
			default: false,
		},
		editpermissions: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamp: true }
);

module.exports = mongoose.model('Hisaab', hisaabSchema);
