var base = (typeof window != 'undefined' && window.location.host == 'radmin.qq.com') ? '/project' : '';
module.exports = {
	serverUrl: typeof window != 'undefined' ? 'http://' + window.location.host + '/' : '',

	getLoginInfo: base + '/mock/getLoginInfo.json',
	getMenu: base + '/mock/getMenu.json',
	getForm: base + '/mock/getForm.json',
	saveForm: base + '/mock/saveForm.json',
	getItemList: base + '/mock/getItemList.json',
	saveItem: base + '/mock/saveItem.json',
	getOption: base + '/mock/getOption.json'
};
