import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { LiveChatFormComponent } from '../live-chat-form/live-chat-form.component';


@Injectable()
export class ChatService {

	currentComment = this.socket.fromEvent<LiveChatFormComponent>('comment');
	comments = this.socket.fromEvent<any>('comments');
	typing = this.socket.fromEvent<any>('typing');

	constructor(private socket: Socket) { }

	commentId() {
		let text = "";
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 5; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
			// TODO Add some salt to this
		}
		return text;
	}

	newComment(comment) {
		const date = (new Date());
		const value = { id: this.commentId(), name: comment.name, comment: comment.comment };
		this.socket.emit('addComment', value);
	}

	typingComment(flag) {
		this.socket.emit('typingComment', flag);
	}

}
