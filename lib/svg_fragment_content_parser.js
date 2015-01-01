/*
 * SVG Fragment content parser.
 *
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE-WTFPL file for more details.
 * The nc-GPL licence also applies to it (see http://culturalliberty.org/blog).
*/

module.exports = {

	supportedExtensions: [".svg"],

	parse: function(input, callback){
		var output, err;

		try {
			output = input.toString();
		} catch(e) {
			err = e;
		}

		return callback(err, output);
	},

	setup: function(/*config*/) {
        // Nothing to setup, config not needed
	}

};
