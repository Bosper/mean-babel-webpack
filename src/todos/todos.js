export default function($scope) {

    let params = {
        createHasInput: false
    };

    $scope.todos = [
        {
            task: 'Wash dishes',
            isCompleted: false
        },
        {
            task: 'Walk outside',
            isCompleted: true
        }
    ];

    $scope.onCompletedClick = todo => {
        todo.isCompleted = !todo.isCompleted;
    };

    $scope.$watch('createTaskInput', val => {
        if(!val && params.createHasInput) {
            $scope.todos.pop();
            params.createHasInput = false;
        }
        else if (val && !params.createHasInput) {
            $scope.todos.push({
                task: val,
                isCompleted: false
            });
            params.createHasInput = true;
        }
        else if (val && params.createHasInput) {
            $scope.todos[$scope.todos.length - 1].task = val;
        }
    });
};