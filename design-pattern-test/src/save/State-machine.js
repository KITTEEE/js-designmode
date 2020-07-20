import StateMachine from 'javascript-state-machine';
import $ from 'jquery';
const fsm = new StateMachine({
    init: '收藏',
    transitions: [
        {
            name: 'doStore',
            from: '收藏',
            to: '取消收藏',
        },
        {
            name: 'deleteStore',
            from: '取消收藏',
            to: '收藏',
        },
    ],
    methods: {
        onDoStore() {
            alert('收藏成功');
            updateText();
        },
        onDeleteStore() {
            alert('已取消收藏');
            updateText();
        },
    },
});
let btn = $('#btn');
btn.click(function () {
    if (fsm.is('收藏')) {
        fsm.doStore();
    } else {
        fsm.deleteStore();
    }
});
function updateText() {
    btn.text(fsm.state);
}
updateText();
