import Ember from 'ember';
import crypto from "md5";

export function md5(params) {
	return crypto(params[0]);
}

export default Ember.Helper.helper(md5);