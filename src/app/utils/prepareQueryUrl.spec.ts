import {prepareQueryUrl} from "./prepareQueryUrl";

describe('utils::prepareQueryUrl', () => {

  it('Should return correct path string', () => {
    const result = prepareQueryUrl('http://some.site', { q: 'some-string', p: 22 });
    expect(result).toEqual('http://some.site?q=some-string&p=22');
  });

});
