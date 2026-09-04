/* =====================================================
   AWS × EEE COMPLETE COURSE
===================================================== */

const modules = [

/* =====================================================
   MODULE 1
===================================================== */

{
  id: 1,

  title: "Welcome to AWS × EEE",

  short: "Welcome",

  duration: "10 min",

  description:
    "Understand the purpose of the workshop and learn how electrical engineering problems can be converted into cloud-based solutions.",

  sections: [

    {
      title: "What will you learn?",

      content: `

      <div class="grid">

        <div class="info-card">
          <strong>01 · Cloud Fundamentals</strong>
          <p>
            Understand what cloud computing means and
            why engineers use cloud infrastructure.
          </p>
        </div>

        <div class="info-card">
          <strong>02 · IoT Communication</strong>
          <p>
            Learn how sensors and embedded devices
            communicate with AWS using MQTT.
          </p>
        </div>

        <div class="info-card">
          <strong>03 · Cloud Services</strong>
          <p>
            Learn the purpose of SQS, Lambda, S3,
            SNS, CloudWatch and EC2.
          </p>
        </div>

        <div class="info-card">
          <strong>04 · System Integration</strong>
          <p>
            Combine individual AWS services into
            one complete engineering architecture.
          </p>
        </div>

        <div class="info-card">
          <strong>05 · Engineering Applications</strong>
          <p>
            Apply the concepts to transformers,
            EV batteries, energy meters and industries.
          </p>
        </div>

        <div class="info-card">
          <strong>06 · Capstone</strong>
          <p>
            Design and explain your own AWS × EEE
            engineering solution.
          </p>
        </div>

      </div>

      `
    },

    {
      title: "The central idea",

      content: `

      <p>
        Modern electrical and electronic systems generate
        enormous amounts of information.
      </p>

      <p>
        A transformer can produce temperature and current
        measurements. An EV battery management system can
        produce state-of-charge and temperature information.
        A solar plant can generate voltage, current,
        irradiance and power measurements.
      </p>

      <p>
        The important engineering question is:
      </p>

      <div class="callout">
        <strong>
          How do we move this physical information into
          software that can process it, store it, monitor it
          and take action?
        </strong>
      </div>

      <p>
        This is where cloud computing and IoT architecture
        become useful.
      </p>

      `
    },

    {
      title: "The complete engineering flow",

      content: `

      <div class="architecture">

        <div class="arch-node">
          EEE Device
          <small>
            Sensor / MCU
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          MQTT
          <small>
            Telemetry
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          AWS IoT Core
          <small>
            Device gateway
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          SQS
          <small>
            Message buffer
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Lambda
          <small>
            Processing
          </small>
        </div>

      </div>

      <div class="architecture">

        <div class="arch-node">
          Lambda
          <small>
            Process
          </small>
        </div>

        <div class="arch-arrow">↙</div>

        <div class="arch-node">
          S3
          <small>
            Store
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          CloudWatch
          <small>
            Monitor
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          SNS
          <small>
            Notify
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Engineer
          <small>
            Action
          </small>
        </div>

      </div>

      `
    },

    {
      title: "Think like an engineer",

      content: `

      <div class="callout blue">

        Instead of memorizing AWS services,
        always ask:

        <br><br>

        <strong>
        What engineering problem am I trying to solve?
        </strong>

        <br><br>

        Then select the service that performs that job.

      </div>

      <div class="grid">

        <div class="info-card">
          <strong>Need to connect devices?</strong>
          <p>AWS IoT Core + MQTT</p>
        </div>

        <div class="info-card">
          <strong>Need to buffer messages?</strong>
          <p>Amazon SQS</p>
        </div>

        <div class="info-card">
          <strong>Need event processing?</strong>
          <p>AWS Lambda</p>
        </div>

        <div class="info-card">
          <strong>Need object storage?</strong>
          <p>Amazon S3</p>
        </div>

        <div class="info-card">
          <strong>Need notifications?</strong>
          <p>Amazon SNS</p>
        </div>

        <div class="info-card">
          <strong>Need monitoring?</strong>
          <p>Amazon CloudWatch</p>
        </div>

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "Why connect an EEE sensor to cloud infrastructure?",
        [
          "To collect, process, store, monitor and act on telemetry",
          "To make the sensor physically larger",
          "Only to charge the sensor"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 2
===================================================== */

{
  id: 2,

  title: "Cloud Computing Fundamentals",

  short: "Cloud Fundamentals",

  duration: "25 min",

  description:
    "Learn the fundamental ideas behind cloud computing and understand why AWS is useful for engineering applications.",

  sections: [

    {
      title: "What is cloud computing?",

      content: `

      <p>
        Cloud computing is the on-demand delivery of computing
        resources over a network.
      </p>

      <p>
        Instead of purchasing and maintaining every server,
        storage system and networking component yourself,
        you can consume infrastructure and managed services
        from a cloud provider.
      </p>

      <div class="callout">
        <strong>Simple definition:</strong>
        Cloud computing means using computing resources
        when you need them instead of owning and managing
        all the physical infrastructure yourself.
      </div>

      `
    },

    {
      title: "Traditional system vs cloud system",

      content: `

      <div class="grid two">

        <div class="info-card">

          <strong>Traditional approach</strong>

          <ul>

            <li>Purchase physical servers</li>

            <li>Install operating systems</li>

            <li>Maintain hardware</li>

            <li>Plan capacity in advance</li>

            <li>Handle hardware failures</li>

            <li>Manage upgrades</li>

          </ul>

        </div>


        <div class="info-card">

          <strong>Cloud approach</strong>

          <ul>

            <li>Select required cloud resources</li>

            <li>Provision them when needed</li>

            <li>Use managed services where suitable</li>

            <li>Monitor resource usage</li>

            <li>Scale according to workload</li>

            <li>Remove resources when finished</li>

          </ul>

        </div>

      </div>

      `
    },

    {
      title: "Example: 500 smart sensors",

      content: `

      <p>
        Imagine a factory containing 500 smart electrical
        sensors.
      </p>

      <div class="table-wrapper">

        <table>

          <tr>
            <th>Requirement</th>
            <th>Engineering challenge</th>
            <th>Cloud solution</th>
          </tr>

          <tr>
            <td>500 devices</td>
            <td>Device connectivity</td>
            <td>AWS IoT Core</td>
          </tr>

          <tr>
            <td>Thousands of messages</td>
            <td>Traffic spikes</td>
            <td>SQS</td>
          </tr>

          <tr>
            <td>Calculations</td>
            <td>Processing telemetry</td>
            <td>Lambda</td>
          </tr>

          <tr>
            <td>Long-term files</td>
            <td>Data archive</td>
            <td>S3</td>
          </tr>

          <tr>
            <td>Alerts</td>
            <td>Engineer notification</td>
            <td>SNS</td>
          </tr>

          <tr>
            <td>Health monitoring</td>
            <td>Detect failures</td>
            <td>CloudWatch</td>
          </tr>

        </table>

      </div>

      `
    },

    {
      title: "IaaS, PaaS and SaaS",

      content: `

      <div class="grid">

        <div class="info-card">

          <strong>IaaS</strong>

          <p>
            Infrastructure as a Service provides
            infrastructure such as virtual machines,
            networking and storage.
          </p>

          <br>

          <b>Example:</b> Amazon EC2

        </div>


        <div class="info-card">

          <strong>PaaS</strong>

          <p>
            Platform-oriented services abstract
            more infrastructure management from
            the developer.
          </p>

          <br>

          <b>Idea:</b> focus more on application logic

        </div>


        <div class="info-card">

          <strong>SaaS</strong>

          <p>
            Software as a Service provides a complete
            application to the user.
          </p>

          <br>

          <b>Idea:</b> use the software

        </div>

      </div>

      `
    },

    {
      title: "AWS Regions and Availability Zones",

      content: `

      <p>
        AWS resources are created in specific geographical
        Regions.
      </p>

      <p>
        A Region contains multiple Availability Zones,
        which are separate locations designed to provide
        resilience.
      </p>

      <div class="callout blue">

        <strong>Student habit:</strong>

        Always check the selected Region before creating
        an AWS resource. Two resources created in different
        Regions are not automatically the same resource.

      </div>

      `
    },

    {
      title: "Cloud characteristics",

      content: `

      <div class="terms">

        <div class="term">
          <strong>On-demand</strong>
          <span>
            Resources can be provisioned when required.
          </span>
        </div>

        <div class="term">
          <strong>Elasticity</strong>
          <span>
            Capacity can adapt to changing demand.
          </span>
        </div>

        <div class="term">
          <strong>Managed services</strong>
          <span>
            AWS handles much of the underlying infrastructure.
          </span>
        </div>

        <div class="term">
          <strong>Usage-based model</strong>
          <span>
            Many services have usage-based pricing.
          </span>
        </div>

      </div>

      `
    },

    {
      title: "Engineering question",

      content: `

      <div class="activity">

        <h4>
          You need a virtual server for an engineering
          simulation. Which service fits?
        </h4>

        <div class="choice-grid">

          <button class="choice cloud-choice">
            Amazon S3
          </button>

          <button
            class="choice cloud-choice"
            data-correct="true">
            Amazon EC2
          </button>

          <button class="choice cloud-choice">
            Amazon SNS
          </button>

        </div>

        <div
          class="activity-output"
          id="cloudActivity">
          Choose an answer.
        </div>

      </div>

      `
    }

  ]
},


/* =====================================================
   MODULE 3
===================================================== */

{
  id: 3,

  title: "AWS IoT Core + MQTT",

  short: "IoT Core + MQTT",

  duration: "35 min",

  description:
    "Learn how sensors communicate with AWS, how MQTT publish/subscribe works and how IoT Rules route telemetry.",

  sections: [

    {
      title: "What is IoT?",

      content: `

      <p>
        IoT stands for Internet of Things.
      </p>

      <p>
        It describes physical objects equipped with sensors,
        controllers, communication capabilities and software
        that allow them to exchange information.
      </p>

      <div class="grid">

        <div class="info-card">
          <strong>Sense</strong>
          <p>
            Measure temperature, current, voltage,
            vibration, pressure or another quantity.
          </p>
        </div>

        <div class="info-card">
          <strong>Communicate</strong>
          <p>
            Send the measurement through a network.
          </p>
        </div>

        <div class="info-card">
          <strong>Analyze</strong>
          <p>
            Process the information and determine
            whether action is required.
          </p>
        </div>

      </div>

      `
    },

    {
      title: "What is AWS IoT Core?",

      content: `

      <p>
        AWS IoT Core provides cloud capabilities for
        connecting IoT devices to AWS.
      </p>

      <p>
        It supports secure device communication and
        provides mechanisms for processing and routing
        IoT messages into AWS services.
      </p>

      <div class="callout green">

        <strong>Important:</strong>

        AWS IoT Core is not the physical sensor.

        It is the AWS-side IoT platform that helps
        devices communicate with the cloud.

      </div>

      `
    },

    {
      title: "IoT architecture",

      content: `

      <div class="architecture">

        <div class="arch-node">
          Sensor
          <small>
            Physical measurement
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          MCU
          <small>
            ESP32 / controller
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          MQTT
          <small>
            Message protocol
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          IoT Core
          <small>
            Cloud IoT platform
          </small>
        </div>

      </div>

      `
    },

    {
      title: "MQTT explained",

      content: `

      <p>
        MQTT is a lightweight publish/subscribe messaging
        protocol commonly used in IoT systems.
      </p>

      <div class="grid">

        <div class="info-card">

          <strong>Publisher</strong>

          <p>
            Sends a message.
          </p>

          <br>

          Example:
          <br>
          Transformer controller

        </div>

        <div class="info-card">

          <strong>Topic</strong>

          <p>
            Logical channel used to organize messages.
          </p>

          <br>

          <code>
            eee/transformer/01/telemetry
          </code>

        </div>

        <div class="info-card">

          <strong>Subscriber</strong>

          <p>
            Receives messages associated with
            subscribed topics.
          </p>

        </div>

      </div>

      `
    },

    {
      title: "Important IoT terminology",

      content: `

      <div class="terms">

        <div class="term">
          <strong>Thing</strong>
          <span>
            Representation of a physical device in AWS IoT.
          </span>
        </div>

        <div class="term">
          <strong>Certificate</strong>
          <span>
            Can be used to authenticate an IoT device.
          </span>
        </div>

        <div class="term">
          <strong>Policy</strong>
          <span>
            Defines permitted IoT operations.
          </span>
        </div>

        <div class="term">
          <strong>Broker</strong>
          <span>
            Handles MQTT message exchange.
          </span>
        </div>

        <div class="term">
          <strong>Topic</strong>
          <span>
            Named channel for MQTT messages.
          </span>
        </div>

        <div class="term">
          <strong>IoT Rule</strong>
          <span>
            Selects messages and routes them to
            configured AWS destinations.
          </span>
        </div>

      </div>

      `
    },

    {
      title: "Example telemetry message",

      content: `

      <p>
        A sensor might send information in JSON format:
      </p>

      <div class="code-wrapper">

        <button class="copy-btn">
          Copy
        </button>

        <pre class="code">{
  "deviceId": "transformer-01",
  "voltage": 230,
  "current": 8.4,
  "temperature": 62.5,
  "timestamp": "2026-09-04T10:30:00Z"
}</pre>

      </div>

      <div class="callout">
        This is example telemetry. A real device would
        generate the values using its sensors and firmware.
      </div>

      `
    },

    {
      title: "How an IoT Rule works",

      content: `

      <div class="steps">

        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <p>
              The device publishes an MQTT message.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <p>
              AWS IoT Core receives the message.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <p>
              An IoT Rule evaluates/selects the
              relevant message.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <p>
              The configured rule action routes
              the data to a downstream AWS service.
            </p>
          </div>
        </div>

      </div>

      `
    },

    {
      title: "MQTT Quality of Service",

      content: `

      <p>
        MQTT defines different Quality of Service levels.
      </p>

      <div class="grid">

        <div class="info-card">

          <strong>QoS 0</strong>

          <p>
            Delivery is attempted without the
            additional acknowledgment mechanism
            used by QoS 1.
          </p>

        </div>

        <div class="info-card">

          <strong>QoS 1</strong>

          <p>
            Uses acknowledgment and can result
            in duplicate delivery.
          </p>

        </div>

      </div>

      <div class="callout blue">

        This is why telemetry processing should be
        designed with appropriate duplicate-handling
        behavior when required.

      </div>

      `
    },

    {
      title: "Practical learning activity",

      content: `

      <div class="activity">

        <h4>
          Design an MQTT topic
        </h4>

        <p>
          Select the device category.
        </p>

        <div class="choice-grid">

          <button
            class="choice topic-choice"
            data-topic="transformer">
            Transformer
          </button>

          <button
            class="choice topic-choice"
            data-topic="ev-bms">
            EV BMS
          </button>

          <button
            class="choice topic-choice"
            data-topic="solar">
            Solar
          </button>

        </div>

        <div
          class="activity-output"
          id="topicActivity">

          Choose a device.

        </div>

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "What routes selected MQTT messages to downstream AWS services?",
        [
          "An AWS IoT Rule",
          "An S3 object",
          "An EC2 keyboard"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 4
===================================================== */

{
  id: 4,

  title: "Amazon SQS — Message Queuing",

  short: "Amazon SQS",

  duration: "20 min",

  description:
    "Understand queues, producers, consumers, buffering and decoupling in distributed engineering systems.",

  sections: [

    {
      title: "What is Amazon SQS?",

      content: `

      <p>
        Amazon Simple Queue Service, or SQS, is a managed
        message queuing service.
      </p>

      <p>
        A producer sends messages to a queue and a consumer
        processes those messages.
      </p>

      <div class="callout">
        Think of SQS as a waiting line for messages.
      </div>

      `
    },

    {
      title: "Why does an engineering system need a queue?",

      content: `

      <p>
        Consider a smart grid containing thousands of
        sensors.
      </p>

      <p>
        Under normal conditions the processing system may
        easily handle the incoming telemetry.
      </p>

      <p>
        But during a fault or unusual event, thousands of
        devices may send information at approximately the
        same time.
      </p>

      <div class="architecture">

        <div class="arch-node">
          Devices
          <small>
            Many producers
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          IoT Core
          <small>
            Ingestion
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          SQS
          <small>
            Buffer
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Processor
          <small>
            Consumer
          </small>
        </div>

      </div>

      `
    },

    {
      title: "Important SQS terminology",

      content: `

      <div class="terms">

        <div class="term">
          <strong>Producer</strong>
          <span>
            Component that sends a message.
          </span>
        </div>

        <div class="term">
          <strong>Consumer</strong>
          <span>
            Component that receives/processes messages.
          </span>
        </div>

        <div class="term">
          <strong>Queue</strong>
          <span>
            Temporary message holding area.
          </span>
        </div>

        <div class="term">
          <strong>Visibility timeout</strong>
          <span>
            Period during which a received message
            is hidden while processing is attempted.
          </span>
        </div>

        <div class="term">
          <strong>Dead-letter queue</strong>
          <span>
            Queue used to isolate repeatedly failing
            messages.
          </span>
        </div>

        <div class="term">
          <strong>Decoupling</strong>
          <span>
            Components can work independently rather
            than depending directly on each other.
          </span>
        </div>

      </div>

      `
    },

    {
      title: "Standard and FIFO queues",

      content: `

      <div class="grid two">

        <div class="info-card">

          <strong>Standard queue</strong>

          <p>
            Designed for high throughput and
            distributed processing.
          </p>

          <p>
            Applications should account for
            at-least-once delivery behavior.
          </p>

        </div>

        <div class="info-card">

          <strong>FIFO queue</strong>

          <p>
            Designed for use cases where message
            ordering and deduplication capabilities
            are important.
          </p>

        </div>

      </div>

      `
    },

    {
      title: "Failure scenario",

      content: `

      <div class="callout red">

        Imagine Lambda temporarily fails.

        <br><br>

        Instead of losing the engineering message
        immediately, the queue can retain it for
        processing according to its configuration.

        <br><br>

        Repeatedly failing messages can be isolated
        using a dead-letter queue.

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "Why use SQS between ingestion and processing?",
        [
          "To decouple components and absorb traffic spikes",
          "To replace electrical sensors",
          "To permanently store PDF files"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 5
===================================================== */

{
  id: 5,

  title: "AWS Lambda — Event Processing",

  short: "AWS Lambda",

  duration: "25 min",

  description:
    "Learn how serverless event-driven functions process telemetry and make engineering decisions.",

  sections: [

    {
      title: "What is AWS Lambda?",

      content: `

      <p>
        AWS Lambda is a serverless compute service.
      </p>

      <p>
        It allows you to run code in response to events
        without managing a virtual server yourself.
      </p>

      <div class="callout green">

        <strong>
          Lambda mental model:
        </strong>

        Event arrives → function runs → result is produced.

      </div>

      `
    },

    {
      title: "Lambda in an EEE system",

      content: `

      <div class="architecture">

        <div class="arch-node">
          Telemetry
          <small>
            Event
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Lambda
          <small>
            Process
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Result
          <small>
            Store / Alert
          </small>
        </div>

      </div>

      <p>
        Lambda can be used to validate sensor data,
        calculate engineering values and determine
        whether a threshold has been crossed.
      </p>

      `
    },

    {
      title: "Typical telemetry processing",

      content: `

      <div class="steps">

        <div class="step">
          <div class="step-number">1</div>

          <div class="step-content">
            <p>
              Receive voltage, current and temperature.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>

          <div class="step-content">
            <p>
              Validate that the values exist and
              are within sensible ranges.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>

          <div class="step-content">
            <p>
              Calculate derived engineering values.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>

          <div class="step-content">
            <p>
              Determine whether an alert condition exists.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">5</div>

          <div class="step-content">
            <p>
              Store information or send a notification.
            </p>
          </div>
        </div>

      </div>

      `
    },

    {
      title: "Conceptual Lambda example",

      content: `

      <div class="code-wrapper">

        <button class="copy-btn">
          Copy
        </button>

        <pre class="code">export const handler = async (event) => {

  const voltage = Number(event.voltage);

  const current = Number(event.current);

  const power = voltage * current;

  const status =
    power > 2000
      ? "ALERT"
      : "NORMAL";

  return {
    voltage,
    current,
    power,
    status
  };
};</pre>

      </div>

      <div class="callout blue">

        This is a learning example.

        A production system should also handle
        invalid input, errors, permissions,
        logging and integration behavior.

      </div>

      `
    },

    {
      title: "Lambda vs EC2",

      content: `

      <div class="table-wrapper">

        <table>

          <tr>
            <th>AWS Lambda</th>
            <th>Amazon EC2</th>
          </tr>

          <tr>
            <td>Event-driven</td>
            <td>Virtual server</td>
          </tr>

          <tr>
            <td>Server management abstracted</td>
            <td>OS/server environment is under your control</td>
          </tr>

          <tr>
            <td>Good for event processing</td>
            <td>Good for persistent/custom workloads</td>
          </tr>

          <tr>
            <td>Function-oriented</td>
            <td>Server-oriented</td>
          </tr>

        </table>

      </div>

      `
    },

    {
      title: "Engineering scenario",

      content: `

      <div class="activity">

        <h4>
          Transformer temperature exceeds 75°C.
          What should the processing logic do?
        </h4>

        <div class="choice-grid">

          <button class="choice lambda-choice">
            Ignore it
          </button>

          <button
            class="choice lambda-choice"
            data-correct="true">
            Record event + trigger alert
          </button>

          <button class="choice lambda-choice">
            Delete the sensor
          </button>

        </div>

        <div
          class="activity-output"
          id="lambdaActivity">

          Choose an answer.

        </div>

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "What is Lambda primarily used for?",
        [
          "Running event-driven code",
          "Storing objects",
          "Providing MQTT topic names"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 6
===================================================== */

{
  id: 6,

  title: "Amazon S3 — Engineering Storage",

  short: "Amazon S3",

  duration: "20 min",

  description:
    "Understand object storage and how engineering data, reports and archives can be organized using S3.",

  sections: [

    {
      title: "What is Amazon S3?",

      content: `

      <p>
        Amazon Simple Storage Service, commonly called S3,
        is an object storage service.
      </p>

      <p>
        It is useful for storing files and objects such as:
      </p>

      <ul>

        <li>Engineering reports</li>

        <li>CSV datasets</li>

        <li>JSON telemetry archives</li>

        <li>Images</li>

        <li>Logs</li>

        <li>Analysis outputs</li>

      </ul>

      `
    },

    {
      title: "S3 mental model",

      content: `

      <div class="architecture">

        <div class="arch-node">
          S3 Bucket
          <small>
            Container
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Object
          <small>
            File/data
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Object Key
          <small>
            Identifier
          </small>
        </div>

      </div>

      `
    },

    {
      title: "Important S3 terminology",

      content: `

      <div class="terms">

        <div class="term">
          <strong>Bucket</strong>
          <span>
            Container for objects.
          </span>
        </div>

        <div class="term">
          <strong>Object</strong>
          <span>
            Data stored inside S3.
          </span>
        </div>

        <div class="term">
          <strong>Key</strong>
          <span>
            Name used to identify an object.
          </span>
        </div>

        <div class="term">
          <strong>Versioning</strong>
          <span>
            Can preserve multiple versions of objects.
          </span>
        </div>

        <div class="term">
          <strong>Lifecycle</strong>
          <span>
            Rules for transitioning or expiring objects.
          </span>
        </div>

        <div class="term">
          <strong>Access control</strong>
          <span>
            Permissions determine who can access data.
          </span>
        </div>

      </div>

      `
    },

    {
      title: "Organizing EEE data",

      content: `

      <div class="code-wrapper">

        <pre class="code">eee-data/

  transformer/

    2026/

      09/

        04/

          telemetry-1030.json
          telemetry-1031.json

  reports/

    monthly/

      september-2026.pdf</pre>

      </div>

      <p>
        A consistent object-key structure makes large
        engineering archives easier to understand.
      </p>

      `
    },

    {
      title: "S3 vs database",

      content: `

      <div class="grid two">

        <div class="info-card">

          <strong>S3</strong>

          <p>
            Excellent for objects and files such as
            reports, datasets and archives.
          </p>

        </div>

        <div class="info-card">

          <strong>Database</strong>

          <p>
            Better suited for structured records,
            queries, indexes and transactional access
            patterns.
          </p>

        </div>

      </div>

      <div class="callout blue">

        S3 and databases are not competitors in every
        architecture. A system can use both.

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "Which is a natural S3 use case?",
        [
          "Store reports and archived telemetry objects",
          "Act as an MQTT broker",
          "Run a virtual operating system"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 7
===================================================== */

{
  id: 7,

  title: "Amazon SNS — Notifications",

  short: "Amazon SNS",

  duration: "15 min",

  description:
    "Learn how AWS SNS distributes notifications using topics and subscribers.",

  sections: [

    {
      title: "What is SNS?",

      content: `

      <p>
        Amazon Simple Notification Service (SNS) is a
        managed publish/subscribe messaging service.
      </p>

      <p>
        A publisher sends a message to an SNS topic and
        configured subscribers can receive the message.
      </p>

      `
    },

    {
      title: "SNS architecture",

      content: `

      <div class="architecture">

        <div class="arch-node">
          Lambda
          <small>
            Publisher
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          SNS Topic
          <small>
            Transformer alerts
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Subscribers
          <small>
            Notification endpoints
          </small>
        </div>

      </div>

      `
    },

    {
      title: "Example: transformer alert",

      content: `

      <div class="callout">

        <strong>
          Transformer-01 temperature = 82°C
        </strong>

        <br><br>

        Configured threshold = 75°C

        <br><br>

        Processing logic detects the condition
        and publishes an alert event.

      </div>

      <p>
        A useful alert should contain enough context
        for the receiver to understand the event.
      </p>

      <ul>

        <li>Device ID</li>

        <li>Measurement</li>

        <li>Threshold</li>

        <li>Timestamp</li>

        <li>Severity</li>

      </ul>

      `
    },

    {
      title: "SNS vs SQS",

      content: `

      <div class="table-wrapper">

        <table>

          <tr>
            <th>SQS</th>
            <th>SNS</th>
          </tr>

          <tr>
            <td>Queue</td>
            <td>Topic</td>
          </tr>

          <tr>
            <td>Waiting line for messages</td>
            <td>Publish/subscribe distribution</td>
          </tr>

          <tr>
            <td>Useful for buffering work</td>
            <td>Useful for distributing notifications</td>
          </tr>

          <tr>
            <td>Consumer processes messages</td>
            <td>Subscribers receive published messages</td>
          </tr>

        </table>

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "Which service is designed around publish/subscribe notifications?",
        [
          "Amazon SNS",
          "Amazon S3",
          "Amazon EC2"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 8
===================================================== */

{
  id: 8,

  title: "Amazon CloudWatch — Monitoring",

  short: "CloudWatch",

  duration: "20 min",

  description:
    "Learn how metrics, logs, dashboards and alarms help engineers observe cloud applications.",

  sections: [

    {
      title: "What is CloudWatch?",

      content: `

      <p>
        Amazon CloudWatch provides monitoring and
        observability capabilities for AWS resources
        and applications.
      </p>

      <p>
        Important concepts include:
      </p>

      <div class="grid">

        <div class="info-card">
          <strong>Metrics</strong>
          <p>
            Numeric measurements used for monitoring.
          </p>
        </div>

        <div class="info-card">
          <strong>Logs</strong>
          <p>
            Detailed records generated by applications
            and services.
          </p>
        </div>

        <div class="info-card">
          <strong>Dashboards</strong>
          <p>
            Visual monitoring views.
          </p>
        </div>

        <div class="info-card">
          <strong>Alarms</strong>
          <p>
            Conditions evaluated against metrics.
          </p>
        </div>

      </div>

      `
    },

    {
      title: "Important engineering clarification",

      content: `

      <div class="callout blue">

        CloudWatch does not automatically read an analog
        voltage directly from your ESP32.

        <br><br>

        Your architecture must first make the relevant
        measurement available as a metric or application
        signal that CloudWatch can monitor.

      </div>

      `
    },

    {
      title: "EEE monitoring dashboard",

      content: `

      <div class="grid">

        <div class="info-card">

          <strong>Transformer Temperature</strong>

          <p>
            Current value, trend and threshold status.
          </p>

        </div>

        <div class="info-card">

          <strong>SQS Queue Depth</strong>

          <p>
            Helps identify processing backlog.
          </p>

        </div>

        <div class="info-card">

          <strong>Lambda Errors</strong>

          <p>
            Helps identify processing failures.
          </p>

        </div>

        <div class="info-card">

          <strong>Application Logs</strong>

          <p>
            Useful during fault investigation.
          </p>

        </div>

      </div>

      `
    },

    {
      title: "Failure investigation",

      content: `

      <div class="steps">

        <div class="step">
          <div class="step-number">1</div>

          <div class="step-content">
            <p>
              An alarm indicates an abnormal condition.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>

          <div class="step-content">
            <p>
              Inspect application logs.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>

          <div class="step-content">
            <p>
              Check queue depth and processing errors.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>

          <div class="step-content">
            <p>
              Investigate device and IoT health signals.
            </p>
          </div>
        </div>

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "What is CloudWatch mainly used for?",
        [
          "Monitoring metrics, logs and alarms",
          "Providing MQTT protocol semantics",
          "Storing every file as an object"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 9
===================================================== */

{
  id: 9,

  title: "Amazon EC2 — Virtual Servers",

  short: "Amazon EC2",

  duration: "20 min",

  description:
    "Understand virtual servers and decide when EC2 is more suitable than serverless compute.",

  sections: [

    {
      title: "What is EC2?",

      content: `

      <p>
        Amazon Elastic Compute Cloud, commonly called EC2,
        provides virtual servers known as instances.
      </p>

      <p>
        You can select an operating-system image,
        instance configuration and networking settings,
        then run software on the virtual machine.
      </p>

      `
    },

    {
      title: "EC2 terminology",

      content: `

      <div class="terms">

        <div class="term">
          <strong>Instance</strong>
          <span>
            A running virtual server.
          </span>
        </div>

        <div class="term">
          <strong>AMI</strong>
          <span>
            Image/template used to launch an instance.
          </span>
        </div>

        <div class="term">
          <strong>Instance type</strong>
          <span>
            Defines compute and memory characteristics.
          </span>
        </div>

        <div class="term">
          <strong>Security group</strong>
          <span>
            Network access control for the instance.
          </span>
        </div>

        <div class="term">
          <strong>EBS</strong>
          <span>
            Block storage commonly used with EC2.
          </span>
        </div>

        <div class="term">
          <strong>Terminate</strong>
          <span>
            Permanently removes an instance according
            to its configured storage behavior.
          </span>
        </div>

      </div>

      `
    },

    {
      title: "EEE applications of EC2",

      content: `

      <div class="grid">

        <div class="info-card">

          <strong>Engineering Simulation</strong>

          <p>
            Run custom simulation applications
            requiring an operating environment.
          </p>

        </div>

        <div class="info-card">

          <strong>Industrial Software</strong>

          <p>
            Host a long-running custom application.
          </p>

        </div>

        <div class="info-card">

          <strong>Machine Learning</strong>

          <p>
            Create a custom compute environment
            when server-level control is required.
          </p>

        </div>

      </div>

      `
    },

    {
      title: "EC2 vs Lambda decision",

      content: `

      <div class="callout">

        Ask yourself:

        <br><br>

        <strong>
        “Do I need a server that I control,
        or do I simply need code to run when
        an event occurs?”
        </strong>

        <br><br>

        Server control → EC2

        <br>

        Event-driven processing → Lambda

      </div>

      `
    },

    {
      title: "Safe lab practice",

      content: `

      <div class="steps">

        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <p>
              Select a small practical instance for
              experimentation.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <p>
              Allow only the network traffic you need.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <p>
              Stop or terminate resources when
              the lab is finished.
            </p>
          </div>
        </div>

      </div>

      `
    },

    {
      title: "Quick check",

      content: quiz(
        "Why might an engineer choose EC2 instead of Lambda?",
        [
          "They need OS/server control for a persistent workload",
          "They need object storage",
          "They need MQTT topic syntax"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 10
===================================================== */

{
  id: 10,

  title: "Complete AWS × EEE Architecture",

  short: "System Integration",

  duration: "30 min",

  description:
    "Connect every major concept into a complete engineering telemetry pipeline.",

  sections: [

    {
      title: "The complete architecture",

      content: `

      <div class="architecture">

        <div class="arch-node">
          EEE Sensor
          <small>
            Voltage / Current / Temp
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          MQTT
          <small>
            Telemetry
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          IoT Core
          <small>
            Secure ingestion
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          IoT Rule
          <small>
            Route
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          SQS
          <small>
            Buffer
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Lambda
          <small>
            Process
          </small>
        </div>

      </div>

      <div class="architecture">

        <div class="arch-node">
          Lambda
          <small>
            Result
          </small>
        </div>

        <div class="arch-arrow">↙</div>

        <div class="arch-node">
          S3
          <small>
            Archive
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          CloudWatch
          <small>
            Monitor
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          SNS
          <small>
            Alert
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Engineer
          <small>
            Action
          </small>
        </div>

      </div>

      `
    },

    {
      title: "Follow one telemetry message",

      content: `

      <div class="steps">

        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <p>
              A sensor measures temperature.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <p>
              The embedded controller creates
              a telemetry message.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <p>
              MQTT transports the message to
              AWS IoT Core.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <p>
              An IoT Rule routes the selected
              message to SQS.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">5</div>
          <div class="step-content">
            <p>
              SQS buffers the work.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">6</div>
          <div class="step-content">
            <p>
              Lambda processes the telemetry.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">7</div>
          <div class="step-content">
            <p>
              Useful information is stored in S3.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">8</div>
          <div class="step-content">
            <p>
              Monitoring information is exposed
              through CloudWatch.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-number">9</div>
          <div class="step-content">
            <p>
              SNS distributes the configured alert.
            </p>
          </div>
        </div>

      </div>

      `
    },

    {
      title: "Why decoupling matters",

      content: `

      <p>
        A major advantage of this architecture is
        decoupling.
      </p>

      <p>
        The component receiving telemetry does not have
        to perform every processing operation immediately.
      </p>

      <p>
        SQS provides a buffer between message ingestion
        and processing.
      </p>

      <div class="callout green">

        <strong>
          Engineering principle:
        </strong>

        Separate “getting data into the system”
        from “processing the data”.

      </div>

      `
    },

    {
      title: "Failure analysis",

      content: `

      <div class="table-wrapper">

        <table>

          <tr>
            <th>Problem</th>
            <th>What should you investigate?</th>
          </tr>

          <tr>
            <td>Device stopped sending</td>
            <td>
              Device, network, authentication and IoT connectivity
            </td>
          </tr>

          <tr>
            <td>Queue keeps growing</td>
            <td>
              Processing capacity, Lambda errors and processing time
            </td>
          </tr>

          <tr>
            <td>Alerts stopped</td>
            <td>
              Processing result, SNS configuration and application logs
            </td>
          </tr>

          <tr>
            <td>Archive missing</td>
            <td>
              S3 destination, IoT Rule action and permissions
            </td>
          </tr>

        </table>

      </div>

      `
    },

    {
      title: "Architecture quick check",

      content: quiz(
        "Which service acts as the message buffer?",
        [
          "Amazon SQS",
          "Amazon S3",
          "Amazon EC2"
        ],
        0
      )
    }

  ]
},


/* =====================================================
   MODULE 11
===================================================== */

{
  id: 11,

  title: "EEE Capstone Project",

  short: "Capstone Project",

  duration: "45 min",

  description:
    "Design your own engineering solution using the AWS services learned throughout the course.",

  sections: [

    {
      title: "Choose your engineering problem",

      content: `

      <div class="activity">

        <h4>
          Step 1 — Select your project
        </h4>

        <p>
          Choose the engineering domain you want
          to solve.
        </p>

        <div class="choice-grid">

          <button
            class="choice project-choice"
            data-project="Smart Transformer Monitoring">

            Transformer Monitoring

          </button>

          <button
            class="choice project-choice"
            data-project="EV Battery Monitoring">

            EV / BMS

          </button>

          <button
            class="choice project-choice"
            data-project="Smart Energy Meter">

            Energy Meter

          </button>

          <button
            class="choice project-choice"
            data-project="Solar Plant Monitoring">

            Renewable Energy

          </button>

          <button
            class="choice project-choice"
            data-project="Industrial Machine Monitoring">

            Industrial Automation

          </button>

          <button
            class="choice project-choice"
            data-project="Smart Building">

            Smart Building

          </button>

        </div>

        <div
          class="activity-output"
          id="projectActivity">

          Select your project.

        </div>

      </div>

      `
    },

    {
      title: "Define the engineering problem",

      content: `

      <div class="grid two">

        <div class="info-card">

          <strong>Problem</strong>

          <p>
            What abnormal condition, inefficiency
            or risk are you trying to detect?
          </p>

        </div>

        <div class="info-card">

          <strong>Users</strong>

          <p>
            Who will use the information?
            Operator, maintenance engineer,
            energy manager?
          </p>

        </div>

        <div class="info-card">

          <strong>Sensor / Transducer</strong>

          <p>
            What physical quantity will be measured?
          </p>

        </div>

        <div class="info-card">

          <strong>Telemetry</strong>

          <p>
            What information will the device send?
          </p>

        </div>

      </div>

      `
    },

    {
      title: "Example telemetry",

      content: `

      <div class="code-wrapper">

        <button class="copy-btn">
          Copy
        </button>

        <pre class="code">{
  "deviceId": "eee-device-01",
  "voltage": 230,
  "current": 8.4,
  "temperature": 62.5,
  "status": "NORMAL",
  "timestamp": "2026-09-04T10:30:00Z"
}</pre>

      </div>

      <p>
        Depending on your project, you can add
        measurements such as:
      </p>

      <ul>

        <li>Battery state of charge</li>

        <li>Vibration</li>

        <li>Power factor</li>

        <li>Solar irradiance</li>

        <li>Motor speed</li>

        <li>Humidity</li>

      </ul>

      `
    },

    {
      title: "Select AWS services",

      content: `

      <div class="terms">

        <div class="term">
          <strong>Connect</strong>
          <span>
            AWS IoT Core + MQTT
          </span>
        </div>

        <div class="term">
          <strong>Buffer</strong>
          <span>
            Amazon SQS
          </span>
        </div>

        <div class="term">
          <strong>Process</strong>
          <span>
            AWS Lambda
          </span>
        </div>

        <div class="term">
          <strong>Store</strong>
          <span>
            Amazon S3
          </span>
        </div>

        <div class="term">
          <strong>Monitor</strong>
          <span>
            Amazon CloudWatch
          </span>
        </div>

        <div class="term">
          <strong>Alert</strong>
          <span>
            Amazon SNS
          </span>
        </div>

      </div>

      `
    },

    {
      title: "Draw your final architecture",

      content: `

      <div class="architecture">

        <div class="arch-node">
          Device
          <small>
            Sensor
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          MQTT
          <small>
            Telemetry
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          IoT Core
          <small>
            Connect
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          SQS
          <small>
            Buffer
          </small>
        </div>

        <div class="arch-arrow">→</div>

        <div class="arch-node">
          Lambda
          <small>
            Process
          </small>
        </div>

      </div>

      <div class="architecture">

        <div class="arch-node">
          S3
          <small>
            Store
          </small>
        </div>

        <div class="arch-arrow">+</div>

        <div class="arch-node">
          CloudWatch
          <small>
            Monitor
          </small>
        </div>

        <div class="arch-arrow">+</div>

        <div class="arch-node">
          SNS
          <small>
            Alert
          </small>
        </div>

      </div>

      `
    },

    {
      title: "Define an engineering threshold",

      content: `

      <div class="callout">

        Example:

        <br><br>

        Transformer temperature > 75°C

        <br><br>

        Processing logic detects the condition,
        records the event and triggers an alert workflow.

      </div>

      <div class="callout red">

        Important:

        A workshop threshold is only an example.
        Real protection settings must follow appropriate
        electrical engineering, safety and equipment
        requirements.

      </div>

      `
    },

    {
      title: "Your 60-second project pitch",

      content: `

      <div class="lesson-section final-card">

        <div class="final-title">
          🎤 Present your solution
        </div>

        <ol>

          <li>
            Our engineering problem is...
          </li>

          <li>
            We measure...
          </li>

          <li>
            The device sends telemetry using MQTT...
          </li>

          <li>
            AWS IoT Core receives the device data...
          </li>

          <li>
            SQS provides a buffer...
          </li>

          <li>
            Lambda processes the telemetry...
          </li>

          <li>
            S3 stores useful engineering data...
          </li>

          <li>
            CloudWatch monitors the system...
          </li>

          <li>
            SNS sends notifications...
          </li>

          <li>
            The main benefit of our solution is...
          </li>

        </ol>

      </div>

      `
    },

    {
      title: "Final design review",

      content: `

      <div class="grid">

        <div class="info-card">
          <strong>Reliability</strong>
          <p>
            What happens if processing fails?
          </p>
        </div>

        <div class="info-card">
          <strong>Security</strong>
          <p>
            Who is allowed to publish or read data?
          </p>
        </div>

        <div class="info-card">
          <strong>Scalability</strong>
          <p>
            What happens if devices increase 10×?
          </p>
        </div>

        <div class="info-card">
          <strong>Monitoring</strong>
          <p>
            How will you know the system is failing?
          </p>
        </div>

        <div class="info-card">
          <strong>Cost</strong>
          <p>
            Which resources need to be cleaned up?
          </p>
        </div>

        <div class="info-card">
          <strong>Data quality</strong>
          <p>
            What happens when telemetry is missing
            or invalid?
          </p>
        </div>

      </div>

      `
    }

  ]
},


/* =====================================================
   MODULE 12
===================================================== */

{
  id: 12,

  title: "Final Assessment & Glossary",

  short: "Assessment",

  duration: "15 min",

  description:
    "Test your understanding and review the most important AWS and engineering terminology.",

  sections: [

    {
      title: "Final assessment",

      content:

        quiz(
          "1. MQTT is:",
          [
            "A lightweight publish/subscribe protocol",
            "An AWS storage service",
            "A virtual machine"
          ],
          0
        )

        +

        quiz(
          "2. Which service buffers messages?",
          [
            "Amazon SQS",
            "Amazon SNS",
            "Amazon S3"
          ],
          0
        )

        +

        quiz(
          "3. Which service runs event-driven code?",
          [
            "AWS Lambda",
            "Amazon EC2",
            "MQTT"
          ],
          0
        )

        +

        quiz(
          "4. Which service provides object storage?",
          [
            "Amazon S3",
            "Amazon SNS",
            "AWS IoT Core"
          ],
          0
        )

        +

        quiz(
          "5. Which service provides monitoring capabilities?",
          [
            "Amazon CloudWatch",
            "Amazon SQS",
            "Amazon EC2"
          ],
          0
        )

    },

    {
      title: "AWS × EEE glossary",

      content: `

      <div class="terms">

        <div class="term">
          <strong>AWS</strong>
          <span>
            Amazon Web Services cloud platform.
          </span>
        </div>

        <div class="term">
          <strong>IoT</strong>
          <span>
            Internet-connected physical devices
            and systems.
          </span>
        </div>

        <div class="term">
          <strong>MQTT</strong>
          <span>
            Lightweight publish/subscribe protocol.
          </span>
        </div>

        <div class="term">
          <strong>Telemetry</strong>
          <span>
            Measurement data sent from a device.
          </span>
        </div>

        <div class="term">
          <strong>Queue</strong>
          <span>
            Waiting area for messages.
          </span>
        </div>

        <div class="term">
          <strong>Serverless</strong>
          <span>
            Compute model where server management
            is abstracted from the developer.
          </span>
        </div>

        <div class="term">
          <strong>Object Storage</strong>
          <span>
            Storage model used by services such as S3.
          </span>
        </div>

        <div class="term">
          <strong>Pub/Sub</strong>
          <span>
            Publisher sends messages to a topic and
            subscribers receive them.
          </span>
        </div>

        <div class="term">
          <strong>Metric</strong>
          <span>
            Numeric measurement used for monitoring.
          </span>
        </div>

      </div>

      `
    },

    {
      title: "The seven lines to remember",

      content: `

      <div class="callout green">

        <strong>1.</strong>
        MQTT carries telemetry.

        <br><br>

        <strong>2.</strong>
        AWS IoT Core connects devices and supports
        IoT messaging and routing.

        <br><br>

        <strong>3.</strong>
        SQS buffers messages.

        <br><br>

        <strong>4.</strong>
        Lambda processes events.

        <br><br>

        <strong>5.</strong>
        S3 stores objects.

        <br><br>

        <strong>6.</strong>
        CloudWatch monitors.

        <br><br>

        <strong>7.</strong>
        SNS distributes notifications.

      </div>

      `
    },

    {
      title: "🎓 Course completed",

      content: `

      <div class="lesson-section final-card">

        <div class="final-title">
          Congratulations!
        </div>

        <p>
          You have completed the AWS × EEE learning path.
        </p>

        <p>
          You can now explain how a physical engineering
          measurement can travel from an embedded device
          into a cloud architecture.
        </p>

        <div class="callout green">

          Sensor → MQTT → IoT Core → SQS →
          Lambda → S3 / CloudWatch / SNS

        </div>

        <p>
          The next step is to turn your architecture
          into a working prototype.
        </p>

      </div>

      `
    }

  ]
}

];


/* =====================================================
   QUIZ FUNCTION
===================================================== */

function quiz(question, options, correctAnswer) {

  return `

    <div
      class="quiz"
      data-correct="${correctAnswer}">

      <div class="quiz-question">

        ${question}

      </div>

      <div class="quiz-options">

        ${options.map(
          (option, index) => `

            <button
              class="quiz-option"
              data-index="${index}">

              ${option}

            </button>

          `
        ).join("")}

      </div>

      <div class="quiz-result"></div>

    </div>

  `;
}


/* =====================================================
   STATE
===================================================== */

let currentModule = 0;

let completedModules =
  JSON.parse(
    localStorage.getItem(
      "awsEEECompleted"
    ) || "[]"
  );


/* =====================================================
   NAVIGATION
===================================================== */

function renderNavigation() {

  const nav =
    document.getElementById(
      "moduleNav"
    );

  nav.innerHTML =
    modules.map(
      (module, index) => {

        const completed =
          completedModules.includes(
            module.id
          );

        return `

          <button
            class="
              nav-item
              ${index === currentModule ? "active" : ""}
              ${completed ? "completed" : ""}
            "
            onclick="openModule(${index})">

            <span class="nav-number">

              ${
                completed
                  ? "✓"
                  : String(index + 1).padStart(2, "0")
              }

            </span>

            <span class="nav-name">

              ${module.short}

            </span>

          </button>

        `;

      }
    ).join("");


  const percentage =
    Math.round(
      completedModules.length /
      modules.length *
      100
    );


  document.getElementById(
    "progressBar"
  ).style.width =
    percentage + "%";


  document.getElementById(
    "progressText"
  ).textContent =
    percentage + "%";


  document.getElementById(
    "progressInfo"
  ).textContent =

    completedModules.length === 0

      ? "Start your learning journey"

      : `${completedModules.length} of ${modules.length} modules completed`;

}


/* =====================================================
   RENDER MODULE
===================================================== */

function renderModule() {

  const module =
    modules[currentModule];


  document.getElementById(
    "breadcrumbText"
  ).textContent =
    module.short;


  document.getElementById(
    "hero"
  ).innerHTML = `

    <div class="hero-label">

      MODULE
      ${String(module.id).padStart(2, "0")}

      • ${module.duration}

    </div>

    <h1>
      ${module.title}
    </h1>

    <p>
      ${module.description}
    </p>

    <div class="hero-tags">

      <span class="hero-tag">
        AWS
      </span>

      <span class="hero-tag">
        EEE
      </span>

      <span class="hero-tag">
        Cloud Computing
      </span>

      <span class="hero-tag">
        Hands-on Learning
      </span>

    </div>

  `;


  const completed =
    completedModules.includes(
      module.id
    );


  const sections =
    module.sections.map(
      (section, index) => `

        <article
          class="lesson-section">

          <h3>

            ${index + 1}.
            ${section.title}

          </h3>

          ${section.content}

        </article>

      `
    ).join("");


  document.getElementById(
    "courseContent"
  ).innerHTML = `

    <div class="module-header">

      <div>

        <span class="module-badge">
          Course Module
        </span>

        <h2>
          ${module.title}
        </h2>

        <p>
          Study the explanation,
          understand the architecture
          and complete the activities.
        </p>

      </div>

      <button
        class="
          complete-btn
          ${completed ? "completed" : ""}
        "
        id="completeBtn">

        ${
          completed
            ? "✓ Completed"
            : "Mark as Complete"
        }

      </button>

    </div>

    ${sections}

  `;


  document.getElementById(
    "pageNumber"
  ).textContent =
    `Module ${currentModule + 1} of ${modules.length}`;


  document.getElementById(
    "previousBtn"
  ).disabled =
    currentModule === 0;


  document.getElementById(
    "nextBtn"
  ).disabled =
    currentModule === modules.length - 1;


  document.getElementById(
    "completeBtn"
  ).onclick =
    completeCurrentModule;


  setupInteractions();

  renderNavigation();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   OPEN MODULE
===================================================== */

function openModule(index) {

  currentModule = index;

  renderModule();

}


/* =====================================================
   COMPLETE MODULE
===================================================== */

function completeCurrentModule() {

  const id =
    modules[currentModule].id;


  if (
    !completedModules.includes(id)
  ) {

    completedModules.push(id);

  }


  localStorage.setItem(
    "awsEEECompleted",
    JSON.stringify(
      completedModules
    )
  );


  renderModule();

}


/* =====================================================
   INTERACTIONS
===================================================== */

function setupInteractions() {


  /* ================= QUIZ ================= */

  document
    .querySelectorAll(".quiz")
    .forEach(
      quizBox => {

        const correct =
          Number(
            quizBox.dataset.correct
          );

        const result =
          quizBox.querySelector(
            ".quiz-result"
          );


        quizBox
          .querySelectorAll(
            ".quiz-option"
          )
          .forEach(
            option => {

              option.onclick =
                () => {

                  const selected =
                    Number(
                      option.dataset.index
                    );


                  quizBox
                    .querySelectorAll(
                      ".quiz-option"
                    )
                    .forEach(
                      button =>
                        button.classList.remove(
                          "correct",
                          "wrong"
                        )
                    );


                  if (
                    selected === correct
                  ) {

                    option.classList.add(
                      "correct"
                    );

                    result.textContent =
                      "✓ Correct!";

                    result.style.color =
                      "#198754";

                  } else {

                    option.classList.add(
                      "wrong"
                    );

                    result.textContent =
                      "✗ Not quite. Try again.";

                    result.style.color =
                      "#c0392b";

                  }

                };

            }
          );

      }
    );


  /* ================= COPY BUTTON ================= */

  document
    .querySelectorAll(".copy-btn")
    .forEach(
      button => {

        button.onclick =
          () => {

            const code =
              button.parentElement
                .querySelector(
                  ".code"
                )
                .innerText;


            navigator.clipboard
              ?.writeText(code);


            button.textContent =
              "Copied!";


            setTimeout(
              () => {

                button.textContent =
                  "Copy";

              },
              1200
            );

          };

      }
    );


  /* ================= CLOUD ACTIVITY ================= */

  document
    .querySelectorAll(".cloud-choice")
    .forEach(
      button => {

        button.onclick =
          () => {

            document
              .querySelectorAll(
                ".cloud-choice"
              )
              .forEach(
                b =>
                  b.classList.remove(
                    "selected"
                  )
              );


            button.classList.add(
              "selected"
            );


            const output =
              document.getElementById(
                "cloudActivity"
              );


            if (
              button.dataset.correct
            ) {

              output.innerHTML =
                "✓ Correct! EC2 provides virtual servers and is suitable when you need operating-system or server-level control.";

            } else {

              output.innerHTML =
                "✗ Not the best choice for this requirement. Think about which service provides a virtual server.";

            }

          };

      }
    );


  /* ================= TOPIC ACTIVITY ================= */

  document
    .querySelectorAll(".topic-choice")
    .forEach(
      button => {

        button.onclick =
          () => {

            document
              .querySelectorAll(
                ".topic-choice"
              )
              .forEach(
                b =>
                  b.classList.remove(
                    "selected"
                  )
              );


            button.classList.add(
              "selected"
            );


            const topic =
              button.dataset.topic;


            document.getElementById(
              "topicActivity"
            ).innerHTML = `

              Recommended topic:

              <br><br>

              <strong>
                eee/${topic}/01/telemetry
              </strong>

              <br><br>

              Example payload:

              voltage,
              current,
              temperature,
              timestamp

            `;

          };

      }
    );


  /* ================= LAMBDA ACTIVITY ================= */

  document
    .querySelectorAll(".lambda-choice")
    .forEach(
      button => {

        button.onclick =
          () => {

            document
              .querySelectorAll(
                ".lambda-choice"
              )
              .forEach(
                b =>
                  b.classList.remove(
                    "selected"
                  )
              );


            button.classList.add(
              "selected"
            );


            const output =
              document.getElementById(
                "lambdaActivity"
              );


            if (
              button.dataset.correct
            ) {

              output.innerHTML =
                "✓ Correct approach. Record the event and trigger an alert workflow. The exact action should follow the equipment's engineering and safety requirements.";

            } else {

              output.innerHTML =
                "✗ That would not be a sensible monitoring response.";

            }

          };

      }
    );


  /* ================= PROJECT ================= */

  document
    .querySelectorAll(".project-choice")
    .forEach(
      button => {

        button.onclick =
          () => {

            document
              .querySelectorAll(
                ".project-choice"
              )
              .forEach(
                b =>
                  b.classList.remove(
                    "selected"
                  )
              );


            button.classList.add(
              "selected"
            );


            document.getElementById(
              "projectActivity"
            ).innerHTML = `

              Selected project:

              <br><br>

              <strong>
                ${button.dataset.project}
              </strong>

              <br><br>

              Now define the sensor,
              telemetry fields,
              threshold and AWS architecture.

            `;

          };

      }
    );

}


/* =====================================================
   NEXT / PREVIOUS
===================================================== */

document
  .getElementById("nextBtn")
  .onclick =
  () => {

    if (
      currentModule <
      modules.length - 1
    ) {

      currentModule++;

      renderModule();

    }

  };


document
  .getElementById("previousBtn")
  .onclick =
  () => {

    if (
      currentModule > 0
    ) {

      currentModule--;

      renderModule();

    }

  };


/* =====================================================
   RESET
===================================================== */

document
  .getElementById("resetBtn")
  .onclick =
  () => {

    const confirmReset =
      confirm(
        "Reset all course progress?"
      );


    if (
      confirmReset
    ) {

      completedModules = [];

      localStorage.removeItem(
        "awsEEECompleted"
      );

      renderModule();

    }

  };


/* =====================================================
   MOBILE MENU
===================================================== */

document
  .getElementById("menuBtn")
  .onclick =
  () => {

    document
      .getElementById("sidebar")
      .classList.toggle(
        "open"
      );

  };


/* =====================================================
   INITIAL LOAD
===================================================== */

renderModule();