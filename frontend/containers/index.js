import { PureComponent } from 'react'
import { getList } from '../api/boss'

import Nav from './nav'
import List from './list'
import Search from './search'

export default class Container extends PureComponent {
    state = {
        list: [],
        keywords: ''
    }

    changeList = keywords => {
        const getLists = getList({
            keywords
        })

        getLists.then(data => this.setState({ list: data.data, keywords }))
    }

    render() {
        const { list, keywords } = this.state

        return (
            <div className='container'>
                <Nav />
                <Search handleSearch={this.changeList} />
                <List list={list} keywords={keywords} />
            </div>
        )
    }
}