/**
 * Created by lizongyuan on 16/2/24.
 */
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

UI.registerHelper('pluralize', function(n, thing) {
    // fairly stupid pluralizer
    if (n === 1) {
        return '1 ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});