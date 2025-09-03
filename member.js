function skillsMember() {
    return {
        restrict: 'E',
        scope: {
            member: '='
        },
        templateUrl: 'skills-member.html'
    };
}

export default skillsMember;