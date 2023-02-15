function loadingStory(storyboard) {

		$.ajax({

			url : '/php/story_api.php',

			data : {
                        "story" : storyboard
                    },

			type : 'POST',

		}).done(function(body) {

			var message = body.response.message;

			var error = body.response.error;

			if (error)

				alert('통신 실패');

				/* get_msg(message); */

			if (error == false) {

				var url = '${referer}';

				if (url == '')

					url = '<c:url value="/memlist" />';

				location.href = url;

				/* location.reload(); */

			}

		});

		alert('삭제되었습니다');

	}