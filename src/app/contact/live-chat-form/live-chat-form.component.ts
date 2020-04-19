import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChatService } from './chat.service';

@Component({
	selector: 'app-live-chat-form',
	templateUrl: './live-chat-form.component.html',
	styleUrls: ['./live-chat-form.component.css']
})
export class LiveChatFormComponent implements OnInit {
	// Will be used for chat messages being sent back and forth from the service.

	commentForm: FormGroup;
	comments: Observable<any>;
	typing: Observable<any>;
	description = '';
	constructor(
		private formBuilder: FormBuilder,
		private commentService: ChatService
	) { }
  
	ngOnInit() {
		this.comments = this.commentService.comments;
		this.typing = this.commentService.typing;
		this.commentForm = this.formBuilder.group({
			name: ['', Validators.required],
			comment: ['', Validators.required]
		});
	}
	onSubmit(formGroup) {
		if (formGroup.valid) {
			this.commentService.newComment(formGroup.value);
			this.description = '';
		}
	}
	typingComments(flag) {
		this.commentService.typingComment(flag);
	}
}
