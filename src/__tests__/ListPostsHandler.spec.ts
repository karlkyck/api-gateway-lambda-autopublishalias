import { handler } from '../ListPostsHandler';

describe('ListPostsHandler', () => {

	describe('handler', () => {

		it('should succeed', async () => {
			const response = await handler(null, null, null);

			expect(response).toEqual(
				{
					statusCode: 200,
					body: JSON.stringify([
						{
							id: '1',
							createdDate: new Date('2019-05-05T10:14:02Z'),
							updatedDate: new Date('2019-05-05T10:14:02Z'),
							title: 'Post Number 1',
							description: 'The first post',
							publishedDate: new Date('2019-05-05T10:14:02Z'),
							content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
						},
						{
							id: '2',
							createdDate: new Date('2019-05-06T10:14:02Z'),
							updatedDate: new Date('2019-05-06T10:14:02Z'),
							title: 'Post Number 2',
							description: 'The second post',
							publishedDate: new Date('2019-05-06T10:14:02Z'),
							content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent. Dui sapien eget mi proin sed. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Mus mauris vitae ultricies leo integer. Amet nisl suscipit adipiscing bibendum est ultricies. Tristique magna sit amet purus gravida. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Neque sodales ut etiam sit amet nisl. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Egestas erat imperdiet sed euismod.'
						}
					])
				});
		});
	});
});