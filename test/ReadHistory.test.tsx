import TestRenderer from 'react-test-renderer';
import ReadHistory from '../src/ReadHistory';
import React from 'react';

describe('ReadHistory', () => {
    test('renders correctly', () => {
        let readHistory = TestRenderer.create(<ReadHistory news={[{uuid: '1', dateTime: '15:29', title: 'title van nieuwsbericht', url: 'https://fd.nl'}]}/>);
        expect(readHistory.toJSON()).toMatchSnapshot();
        readHistory = TestRenderer.create(<ReadHistory className="class-name" title="Recent gelezen blokje" news={[{uuid: '2', dateTime: '15:29', title: 'title van nieuwsbericht', url: 'https://fd.nl', target: "_blank"}]}/>);
        expect(readHistory.toJSON()).toMatchSnapshot();
    });
});
