import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
	type: ADD_COMMENT,
	id: 1,
	text: 'My first comment'
}

{
	type: EDIT_COMMENT,
	id: 1,
	text: 'Edited comment'
}

{
	type: REMOVE_COMMENT,
	id: 1
}

{
	type: THUMB_UP_COMMENT,
	id: 1
}

{
	type: THUMB_DOWN_COMMENT,
	id: 1
}

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}
function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
}
function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}
function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}
function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}

const boundAddComment = text => dispatch(addComment(text));
boundAddComment('new comment');
boundAddComment('another new comment');

const boundEditComment = (text, id) => dispatch(editComment(text, id));
boundEditComment('edited comment', '1');

const boundRemoveComment = id => dispatch(removeComment(id));
boundRemoveComment('1');

const boundThumbUpComment = id => dispatch(thumbUpComment(id));
boundThumbUpComment('1');

const boundThumbDownComment = id => dispatch(thumbDownComment(id));
boundThumbDownComment('1');

/*
dispatch({
	type: ADD_COMMENT,
	text: 'new comment',
	id: uuid.v4()
});
*/
/*
dispatch(addComment('new comment'));
dispatch(addComment('another new comment'));
*/