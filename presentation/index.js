// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  CodePane,
  Code,
  Layout,
  Fill,
  Image
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme({
  primary: '#333',
  secondary: '#eee',
  tertiary: '#1795d4',
  quartenary: 'rgb(254, 216, 0)'
}, {
  primary: 'Lato',
  secondary: 'Times',
  tertiary: 'Menlo'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck transition={['fade', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['slide']} bgColor='tertiary'>
          <Heading textColor='secondary' fit caps>
            More Tests
          </Heading>
          <Heading textColor='quartenary' fit caps>
            Less Work
          </Heading>
          <Text margin='10px 0 100px' textColor='secondary' fit>
            A Gentle Introduction to Property-Based Testing
          </Text>
          <Text bold italic textColor='secondary'>Miguel Duarte &middot; Luís Rodrigues</Text>
          <Text textColor='secondary'>Equal Experts</Text>
          <Text textColor='quartenary' style={{ margin: '20px 0 0' }}>March 7, 2018</Text>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='secondary' caps fit>Why test?</Heading>
        </Slide>
        <Slide bgColor='secondary' caps>
          <Text textColor='primary' fit>Documentation</Text>
          <Text textColor='primary' fit>Quality assurance</Text>
          <Text textColor='primary' fit>Regression prevention</Text>
          <Text textColor='primary' fit>Design Aid</Text>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='secondary' caps fit>How to test?</Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Text textColor='primary' caps fit>Compilation</Text>
          <Text textAlign='right' textColor='primary' italic>(great with types)</Text>
          <Text textColor='primary' style={{ margin: '30px 0 0' }} caps fit>Automated linting</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Text textColor='primary' caps fit>Manual 😬</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Text textColor='primary' caps fit>Automated 😌</Text>
          <Text textColor='primary' caps fit>Unit/BDD</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Automated Testing</Heading>
          <Text textColor='primary' style={{ margin: '30px 0' }} caps fit>Example-based</Text>
          <Text textColor='primary' style={{ margin: '30px 0' }} caps fit>
            <span style={{ borderBottom: '1px solid #1795d4' }}>Generative</span>
          </Text>
          <Text style={{ margin: '30px 0' }} textColor='tertiary' textAlign='right' italic>(this talk)</Text>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='quartenary' fit caps>Example-based testing</Heading>
          <Text textColor='secondary' caps fit>Great, but</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' lineHeight={2} fit caps>Example-based testing</Heading>
          <Text textColor='primary' fit>What cases are significant?</Text>
          <Text textColor='primary' fit>How much coverage is enough?</Text>
          <Text textColor='primary' fit>Are we maintaining irrelevant tests?</Text>
          <Text textColor='primary' fit>How much work would it take to change them?</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' lineHeight={2} fit caps>Property-based testing</Heading>
          <Text textColor='primary' fit>Instead of individual cases,</Text>
          <Text textColor='primary' fit>test general behaviour.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Text textColor='tertiary' textAlign='left' italic>Introducing</Text>
          <Text textColor='primary' fit>Generators</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Text textColor='primary' fit>Before thinking about properties, just</Text>
          <Text textColor='primary' fit>the ability to generate inputs</Text>
          <Text textColor='primary' fit>is already valuable.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Builtin Generators</Heading>
          <List>
            <ListItem textColor='primary'>integer</ListItem>
            <ListItem textColor='primary'>integer(min: integer, max: integer)</ListItem>
            <ListItem textColor='primary'>number(min: number, max: number)</ListItem>
            <ListItem textColor='primary'>asciinestring</ListItem>
            <ListItem textColor='primary'>(... many many more)</ListItem>
          </List>
        </Slide>
        <Slide bgColor='quartenary'>
          <Heading textColor='primary' fit caps>Addition</Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Properties of Addition</Heading>
          <List>
            <ListItem textColor='primary' textFont='secondary' italic>x + y = y + x</ListItem>
            <ListItem textColor='primary' textFont='secondary' italic>(x + y) + z = x + (y + z)</ListItem>
            <ListItem textColor='primary' textFont='secondary' italic>x + 0 = x</ListItem>
            <ListItem textColor='primary' textFont='secondary' italic>x + 1 > x</ListItem>
            <ListItem textColor='primary' textFont='secondary' italic>-x + x = 0</ListItem>
            <ListItem textColor='primary' textFont='secondary' italic>m &times; (x + y) = m &times; x + m &times; y</ListItem>
          </List>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Property Tests for Addition</Heading>
          <CodePane
            lang='typescript'
            source={require('raw-loader!../assets/add.test.ts.example')}
            margin='30px auto'
            overflow='overflow'
          />
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='secondary' caps fit>What properties</Heading>
          <Heading textColor='secondary' caps fit>can be tested?</Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' lineHeight={2} fit caps>Different paths, same goal</Heading>
          <Text textColor='primary' fit><i>E.g.</i>: commutativity, associativity.</Text>
          <Image src="https://fsharpforfunandprofit.com/assets/img/property_commutative.png" />
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' lineHeight={2} fit caps>Roundtrip tests</Heading>
          <Text textColor='primary' fit><i>E.g.</i>: serialisation/deserialisation, getters/setters.</Text>
          <Image src="https://fsharpforfunandprofit.com/assets/img/property_invariant.png" />
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' lineHeight={2} fit caps>Invariants</Heading>
          <Text textColor='primary' fit><i>E.g.</i>: mapped collection length.</Text>
          <Text textColor='primary' fit>list.sort -> same elements, same size</Text>
          <Image src="https://fsharpforfunandprofit.com/assets/img/property_invariant.png" />
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' lineHeight={2} fit caps>Idempotence</Heading>
          <Text textColor='primary' fit><i>E.g.</i>: setters, sorting, filters.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' lineHeight={2} fit caps>Comparing implementations</Heading>
          <Text textColor='primary' fit><i>E.g.</i>: naïve/optimised, single-/multi-threaded, legacy/refactor.</Text>
        </Slide>
        <Slide bgColor='quartenary'>
          <Heading textColor='primary' fit caps>Fizzbuzz</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading textColor="tertiary" fit caps>Composing Generators</Heading>
          <CodePane
            lang="javascript"
            source={`
const email = jsc.asciinestring.generator.map(str => \`\${str}@gmail.com\`)

const person = jsc.record({
  first: jsc.asciinestring,
  last: jsc.asciinestring,
  age : jsc.integer(0,99),
  email: jsc.bless({ generator: email })
})
            `.trim()}
            margin="30px auto"
            overflow="overflow"
            style={{ fontSize: "1.2rem" }}
          />
        </Slide>
        <Slide bgColor='secondary'>
          <Text textColor='tertiary' textAlign='left' italic>Introducing</Text>
          <Text textColor='primary' fit>Shrinkers and Filters</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Shrinkers</Heading>
          <Text textColor='primary' fit>exist for when a test fails.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Shrinkers</Heading>
          <Text textColor='primary' fit>find the smallest input</Text>
          <Text textColor='primary' fit>that still fails the test.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Arbitrary datetime</Heading>
          <Text>(with shrink function)</Text>
          <CodePane
            lang='typescript'
            source={require('raw-loader!../assets/datetime.1.ts.example')}
            margin='30px auto'
            overflow='overflow'
          />
          <CodePane
            lang='markdown'
            source={require('raw-loader!../assets/datetime.output.1.ts.example')}
            margin='30px auto'
            overflow='overflow'
          />
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Arbitrary datetime</Heading>
          <Text>(without shrink function)</Text>
          <CodePane
            lang='typescript'
            source={require('raw-loader!../assets/datetime.2.ts.example')}
            margin='30px auto'
            overflow='overflow'
          />
          <CodePane
            lang='markdown'
            source={require('raw-loader!../assets/datetime.output.2.ts.example')}
            margin='30px auto'
            overflow='overflow'
          />
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary'  caps>Filters</Heading>
          <CodePane
            lang="javascript"
            source={`
            const minor = jsc.suchthat(arbUser, (user) => user.age < 18 )

            `.trim()}
            style={{ fontSize: "1.5rem" }}
            margin="30px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Language Support</Heading>
          <Layout>
            <Fill>
              <List>
                <ListItem textColor='primary'>Clojure: test.check</ListItem>
                <ListItem textColor='primary'>Elixir: quixir</ListItem>
                <ListItem textColor='primary'>Elm: elm-check</ListItem>
                <ListItem textColor='primary'>F#: FsCheck</ListItem>
                <ListItem textColor='primary'>Go: gopter</ListItem>
                <ListItem textColor='primary'>Haskell: QuickCheck</ListItem>
              </List>
            </Fill>
            <Fill>
              <List>
                <ListItem textColor='primary'>Java: junit-quicktest</ListItem>
                <ListItem textColor='primary'>JavaScript: JSVerify</ListItem>
                <ListItem textColor='primary'>Python: Hypothesis</ListItem>
                <ListItem textColor='primary'>Scala: ScalaCheck</ListItem>
                <ListItem textColor='primary'>Swift: SwiftCheck</ListItem>
                <ListItem textColor='primary'>And more...</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='secondary' caps fit>Recap</Heading>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Property-based tests</Heading>
          <Text textColor='primary' fit>improve coverage via generated inputs.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Property-based tests</Heading>
          <Text textColor='primary' fit>complement traditional example-based tests.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Text textColor='primary' fit bold>They are not a full replacement.</Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading textColor='tertiary' fit caps>Property-based tests</Heading>
          <Text textColor='primary' fit>require changing how you think about tests.</Text>
        </Slide>
        <Slide bgColor='primary'>
          <Heading textColor='secondary' caps fit>Questions?</Heading>
        </Slide>
        <Slide bgColor='tertiary'>
          <Heading textColor='quartenary' margin='0 0 100px' fit caps>
            Thank You
          </Heading>
          <Text bold italic textColor='secondary'>Miguel Duarte (@malduarte)</Text>
          <Text bold italic textColor='secondary'>Luís Rodrigues (@goblindegook)</Text>
          <Text bold italic textColor='secondary'>Equal Experts (equalexperts.com)</Text>
        </Slide>
      </Deck>
    )
  }
}
