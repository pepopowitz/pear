import {Command} from '@oclif/command'

import {PearData} from '../../pear-data'
import {PearError} from '../../pear-errors'

export default class Current extends Command {
  static description = 'list current authors in trailer format'

  async run() {
    try {
      const data = new PearData()
      this.log(data.trailer())
    } catch (error) {
      this.handleError(error)
    }
  }

  private handleError(error: PearError) {
    this.error(error.message, {exit: error.exit})
  }
}
