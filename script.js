const categories = {
    "EE": [

    {
        "question": "The direction of magnetic lines",
        "choices": ["from south to North", "from one end of magnetic", "from north pole to south pole", "None of the above"],
        "answer": "from north pole to south pole"
    },
    {
        "question": "Two capacitors C1= 6micro-farad and C2= 4micro-farad are connected in series. Find the equivalent capacitance in micro-farad",
        "choices": ["1.6", "10", "3", "2.4"],
        "answer": "2.4"
    },
    {
        "question": "A 120 V dc shunt motor has an armature resistance of 200milli ohm. If the full nload armature current is 75 A, find the starting resistance needed to limit the armature starting current to 150% of the full load value.",
        "choices": ["0.804", "0.822", "0.849", "0.862"],
        "answer": "0.862"
    },
    {
        "question": "Why are the core losses negligible during short-circuit test in transformer?",
        "choices": ["Power factor is low", "Frequency is low", "Mutual flux is small", "Current is high"],
        "answer": "Power factor is low"
    },
    {
        "question": "A 120 volts dc source is supplying three resistors in series. The first has 50-ohm resistance, second has 45 volts drop and third dissipates 25 watts power. What is the resistance R2?",
        "choices": ["240 ohms", "100 ohms", "120 ohms", "90 ohms"],
        "answer": "90 ohms"
    },
    {
        "question": "What is the type of relay that detect excessive current?",
        "choices": ["Differential Relay", "Reverse current Relay", "Overcurrent Relay", "Overvoltage Relay"],
        "answer": "Overcurrent Relay"
    },
    {
        "question": "Which of the following is an instrument transformer?",
        "choices": ["Distribution transformers", "Potential transformers", "Power transformers", "Autotransformer"],
        "answer": "Potential transformers"
    },
    {
        "question": "A series RLC consists of a 100-ohm resistor, a 90 mH inductor, and a 80 microF capacitor. What is the power factor of the circuit if it is supplied at w=800/sec",
        "choices": ["0.657", "0.857", "0.802", "0.789"],
        "answer": "0.857"
    },
    {
        "question": "For handling greater currents induction wattmeter’s are used in conjunction with",
        "choices": ["Potential transformers", "Current transformers", "Power transformers", "Either of the above"],
        "answer": "Current transformers"
    },
    {
        "question": "Two compound generators are connected in parallel. If generator A has a series field resistance of 0.0015 ohm and is adjusted to take 30% of the line load while generator B with a series field resistance of 0.001 ohm takes the remainder of the load. Determine the current flow in the equalizer when the load is 230 kW at 230V.",
        "choices": ["300A", "100A", "400A", "700A"],
        "answer": "100A"
    },
    {
        "question": "When one coil of magnetically coupled pair has a current of 5 amperes, the resulting flux =0.3 mWb and flux =0.45 mWb respectively. If the turns are N1=100 and N2=300, Find coupling coefficient k.",
        "choices": ["0.6", "0.4", "0.5", "0.7"],
        "answer": "0.4"
    },
    {
        "question": "What is the total resistance of 11 resistors of 33 kilo-Ohms each when connected parallel",
        "choices": ["3 kilo-Ohm", "363 kilo-Ohm", "33 kilo-Ohm", "11 kilo-Ohm"],
        "answer": "3 kilo-Ohm"
    },
    {
        "question": "A balance 3-phase wye connected load of 150 kW takes a leading current of 100 A when the line is 2400 V 60Hz. What is the capacitance per phase?",
        "choices": ["21mF", "21uF", "205 mF", "205 uF"],
        "answer": "205 uF"
    },
    {
        "question": "Find the power factor of a circuit that absorbs 1.5 kW for 230V input voltage and 8A current",
        "choices": ["0.815", "0.781", "0.852", "0.798"],
        "answer": "0.815"
    },
    {
        "question": "Which material has the least resistance",
        "choices": ["Copper", "Glass", "Aluminum", "Porcelain"],
        "answer": "Copper"
    },
    {
        "question": "What is the type of communication that only one of the two party can transmit at a time?",
        "choices": ["Full duplex", "Bicomm", "Half duplex", "Simplex"],
        "answer": "Half duplex"
    },
    {
        "question": "Appliance receptacle outlet installed in a dwelling unit for specific appliance, such as laundry equipment, shall be installed within ____ mm of the intended location of the appliance",
        "choices": ["1200", "2000", "1500", "1800"],
        "answer": "1800"
    },
    {
        "question": "A generator delivers a load through a pair of wires, each of which has a resistance of 0.06 ohm. If the load voltage and power are 120 v and 4.8 kW, respectively, what is the generated voltage?",
        "choices": ["125.5 V", "126.8 V", "124.8 V", "123.5 V"],
        "answer": "124.8 V"
    },
    {
        "question": "In Philippine Distribution Code Performance Standards, which of the following is not belong?",
        "choices": ["Collection standards", "Safety standards", "Reliability standards", "System efficiency standards"],
        "answer": "Collection standards"
    },
    {
        "question": "What is IEEE device number for distance relay?",
        "choices": ["59", "57", "21", "87"],
        "answer": "21"
    },
    {
        "question": "A voltage divider of two resistors is designed with a total resistance of the two resistors are equal to 100 ohms. If the output voltage is 20% of the output voltage, what are the values of the two resistors in the circuit?",
        "choices": ["90- & 10-Ohms", "80- and 20-Ohms", "79- & 21-Ohms", "75- and 25-Ohms"],
        "answer": "80- and 20-Ohms"
    },
    {
        "question": "A series RL consists of R = 40 ohm and L = 50 mH. What is the power factor of the circuit if w = 360rad/sec.",
        "choices": ["0.962", "0.912", "0.866", "0.935"],
        "answer": "0.912"
    },
    {
        "question": "What is the complex expression What is the instantaneous expression for a given alternating current  i = 250 sin (wt + 25 degrees)",
        "choices": ["160 + j75 amperes", "60 - j75 amperes", "227 + j 106", "227 – j 106"],
        "answer": "227 + j 106"
    },
    {
        "question": "The three-phase balanced load of 10 ohms each resistor in each of its phase. The load is supplied by a 220V three phase source. Calculate the power absorbed by the load if its connected in wye.",
        "choices": ["14.52 kW", "2.42kW", "4.84 kW", "2.2 kW"],
        "answer": "4.84 kW"
    },
    {
        "question": "Protection used for personnel against electric shock is",
        "choices": ["GFCI", "Fuse", "AFCI", "Circuit breaker"],
        "answer": "GFCI"
    },
    {
        "question": "The potential difference across a resistor is doubled only________",
        "choices": ["The resistance is halved", "The current is doubled", "The current is halved", "The resistance is doubled"],
        "answer": "The current is doubled"
    },
    {
        "question": "Which of the following is not a consideration in surge arresters?",
        "choices": ["Arrester class", "Voltage rating", "Current rating", "Insulation coordination"],
        "answer": "Current rating"
    },
    {
        "question": "A 60-Hz induction motor has two poles and runs at 3510 rpm. of the What is the synchronous speed of the induction motor?",
        "choices": ["3200 rpm", "3600 rpm", "3800 rpm", "3400 rpm"],
        "answer": "3600 rpm"
    },
    {
        "question": "3000 rpm is how many rad/secs?",
        "choices": ["376.991", "157.08", "314.159", "188.496"],
        "answer": "314.159"
    },
    {
        "question": "An instrument having current coil and a potential coil.",
        "choices": ["Voltmeter", "Wheatstone bridge", "Ammeter", "Wattmeter"],
        "answer": "Wattmeter"
    },
    {
        "question": "An ideal transformer has voltage rating of 2300/230 V, a motor is connected to the secondary draws 30 A at 200 V, what resistance must be connected to maintain this voltage?",
        "choices": ["0.67 Ohm", "1.0 Ohm", "0.75 Ohm", "10 Ohms"],
        "answer": "1.0 Oh"
    },
    {
        "question": "What is the device used to a generator to prevent motorizing?",
        "choices": ["Directional-current relay", "Over frequency relay", "Overvoltage relay", "Reverse Power Relay"],
        "answer": "Reverse Power Relay"
    },
    {
        "question": "What is the PEC Rule for the 115% Disconnecting Means?",
        "choices": ["Wiring Design", "Manufacturing Design", "Construction Design", "Installation Design"],
        "answer": "Installation Design"
    },
    {
        "question": "The location of the lightning arrester is",
        "choices": ["Away from transformer", "Near transformer", "Near Circuit Breaker", "Away from Circuit Breaker"],
        "answer": "Near transformer"
    },
    {
        "question": "What is the moisture limit of transformer oil?",
        "choices": ["3-10ppm", "60-75ppm", "40-50 ppm", "30-35 ppm"],
        "answer": "3-10ppm"
    },
    {
        "question": "Which of the following is not a distance Relay?",
        "choices": ["Impedance Relay", "Reactance Relay", "MHOs Relay", "Overcurrent relay"],
        "answer": "Overcurrent relay"
    },
    {
        "question": "Which of the following is not a cause of noise in communication system?",
        "choices": ["Heat agitation of electrical component", "Manufactured electrical equipment", "Atmosphere", "Another communication signal"],
        "answer": "Another communication signal"
    },
    {
        "question": "A light source located 2.75 m from the surface produces an illumination 528 lux on that surface. Find the illumination if the distance is change to 1.55m.",
        "choices": ["298 lux", "1,662 lux", "937 lux", "1288 lux"],
        "answer": "1,662 lux"
    },
    {
        "question": "Heating value of coal largely depends on",
        "choices": ["Ash content", "moisture content", "Volatile matter", "Size of coal particles"],
        "answer": "Ash content"
    },
    {
        "question": "In a certain country, the energy consumption is expected to double in 10 years. Calculate the percent growth rate.",
        "choices": ["4.78", "6.93", "5.98", "8.43"],
        "answer": "6.93"
    },
    {
        "question": "Which of the following equipment is used to limit short-circuit current level in substation?",
        "choices": ["Isolator", "Coupling capacitor", "Lightning switch", "Series reactor"],
        "answer": "Series reactor"
    },
    {
        "question": "The primary of 3:1 step-up transformer is connected to a source and the secondary is connected to a resistor R. The power dissipated by R in this situation is P. If R is directly connected to the source, it will dissipate the power of",
        "choices": ["9P", "P", "P/9", "P/3"],
        "answer": "P/9"
    },
    {
        "question": "Copper loss of a transformer is determined by?",
        "choices": ["Open circuit test", "Winding resistance Test", "Short Circuit Test", "Transformer ratio test"],
        "answer": "Short Circuit Test"
    },
    {
        "question": "A certain capacitor, in series with a resistor, is being charged. At the end of 10 ms its charge is half the final value. What is the time constant on this process in ms?",
        "choices": ["2.3", "10", "6.9", "14"],
        "answer": "14"
    },
    {
        "question": "The specific resistance p is defined as",
        "choices": ["Resistance of conductor which has length of 1 m and cross-sectionl area of 1m^2 at 25 degrees C", "Resistance of any conductor 25C", "Resistance of any conductor at 20C", "Resistance of a conductor which has a length of 1 m and a cross-sectional at 1 cm^2 at 25 degrees C"],
        "answer": "Resistance of conductor which has length of 1 m and cross-sectionl area of 1m^2 at 25 degrees C"
    },
    {
        "question": "Current has a unit of _____",
        "choices": ["Coulomb/second", "Volts", "Joules /coulomb", "Ohm"],
        "answer": "Coulomb/second"
    },
    {
        "question": "For constant tansmission efficiency, the voltage is increased n times, the size of conductor will be____",
        "choices": ["reduced to (1/n) times the original", "reduced to (1/n^2) times of the original", "increased to n^2 times of the orginal", "increased to n^2 times of the original"],
        "answer": "reduced to (1/n^2) times of the original"
    },
    {
        "question": "A common utilities tariff practice to penalize consumers whose power factor falls below _____and give incentive for power factor above ____",
        "choices": ["80%, 90%", "75%,90%", "85%, 85%", "75%, 85%"],
        "answer": "80%, 90%"
    },
    {
        "question": "A tropical storm is going to the Philippine area of Responsibility (PAR), What alert is to be raised in accordance to the Philippine Distribution Code?",
        "choices": ["Red Alert", "Blue alert", "Yellow Alert", "Orange Alert"],
        "answer": "Blue alert"
    },
    {
        "question": "The sum of the currents into a junction equals the sum of the currents out of the junction is a consequence of",
        "choices": ["Newton’s 3rd Law", "Ohm’s Law", "newton’s 2nd Law", "Conservation of Energy", "Conservation of Charge"],
        "answer": "Conservation of Charge"
    },
    {
        "question": "In Philippine Grid Code, which notice is issued by the operator when the power supply is insufficient to meet the transmission grid's requirement?",
        "choices": ["Red Alert", "Yellow Alert", "Blue Alert", "Security Alert"],
        "answer": "Red Alert"
    },
    {
        "question": "Minimum qualified experience for PEE applicant is ____years",
        "choices": ["4", "5", "6", "10"],
        "answer": "10"
    },
    {
        "question": "Tappings in on-load tap changing transformer are provided on ______",
        "choices": ["HV side", "Primary side", "LV side", "secondary Side"],
        "answer": "HV side"
    },

    {
        "question": "The printed documents are transmitted by fax and converted into baseband electrical signal is called",
        "choices": ["Modulation", "Scanning", "Demodulation", "Reflection"],
        "answer": "Scanning"
    },
    {
        "question": "Which is not included in a basic communication circuit?",
        "choices": ["Antenna", "Communication Channel", "Transmitter", "Receiver"],
        "answer": "AKO NA BAHALA DITO"
    },
    {
        "question": "For which of the following parameter variation, the capacitance of the capacitor remains un affected",
        "choices": ["Distance between plates", "Area of the plates", "Nature of dielectric", "Thickness of the plate"],
        "answer": "Thickness of the plate"
    },
    {
        "question": "Two coils having inductance L1=0.5H, L2=0.3H. At hone instant, l1=12A and l2=5A. Find the tota; energy stored when the coefficient of coupling is M=-0.45H.",
        "choices": ["12.75J", "1275J", "127.5J", "1.265J"],
        "answer": "12.75J"
    },
    {
        "question": "Radio receivers are usually tuned by adjusting capacitor of an LC circuit. If C=C1 for frequency of 600kHz, then for a frequency of 1200 kHz, C must adjust to",
        "choices": ["C1/2", "2C1", " C1/4", "4C1"],
        "answer": "C1/4"
    },
    {
        "question": "The growth rate of the energy consumption in our country is 6.9%. In how many years will the energy be quadrupled?",
        "choices": ["15.01", "20.01", "25.01", "30.01"],
        "answer": "20.01"
    },
    {
        "question": "What is the relationship of the line current IL and coil current Ic in a balanced delta system?",
        "choices": ["They are equal", "Phasor difference of their phase voltage", "1.414 Ic", "Ic/1.732"],
        "answer": "Ic/1.732"
    },
    {
        "question": "When the sole purpose of alternating current is to produce heat, the selection on ____ value of the current",
        "choices": ["Average", "Root Mean Square", "instantaneous", "maximum"],
        "answer": "Root Mean Square"
    },
    {
        "question": "Which is not a renewable energy?",
        "choices": ["Solar", "Wind", "Run-of River", "Nuclear"],
        "answer": "Nuclear"
    },
    {
        "question": "One primary and one secondary of the two-winding transformer are connected to an ohm-meter instrument. What will be the reading of the instrument?",
        "choices": ["Infinity", "Zero", "Zero or Infinity", "equal to winding resistance"],
        "answer": "Infinity"
    },
    {
        "question": "The permeability of material means",
        "choices": ["strength of permanent magnet", "strength of an electromagnet", "the magnetization left in the iron after exciting the field", "the conductivity of a material for magnetic lines of force"],
        "answer": "the conductivity of a material for magnetic lines of force"
    },
    {
        "question": "Which of the following is not a simplex type of electronic communication?",
        "choices": ["TV Broadcasting", "Facsimile or Fax", "Paging Services", "Telephone"],
        "answer": "Telephone"
    },
    {
        "question": "What is the frequency used in communication such as mobile phones?",
        "choices": ["EHF", "VHF", "UHF", "SHF"],
        "answer": "UHF"
    },
    {
        "question": "Power loss is important for the design of",
        "choices": ["Transmission line", "Motor", "Generator", "Feeder"],
        "answer": "Transmission line"
    },
    {
        "question": "Current limiting reactor are used to:",
        "choices": ["Improve the voltage regulation", "Bring down the fault level to minimum capacity", "Improve the efficiency", "improve the power factor"],
        "answer": "Bring down the fault level to minimum capacity"
    },
    {
        "question": "A LC series circuit with an inductance L and capacitance C has an oscillation frequency f. Two inductors, each with inductance L and two capacitors, each with capacitance C, are wired in series and the circuit is completed. The oscillation frequency is",
        "choices": ["f/4", "f", "f/2", "2f"],
        "answer": "f/2"
    }

    ],


    "ESAS 2": [


    {
        "question": "Which of the following is TRUE for water at a reference temperature when enthalpy is zero?",
        "choices": ["Internal energy is negative", "Entropy is nonzero", "Specific volume is zero", "Vapor pressure is zero"],
        "answer": "Entropy is nonzero"
    },
    {
        "question": "Which one of these statements is TRUE for twinning?",
        "choices": ["It is the most significant form of plastic deformation.", "It cannot be caused by impact or thermal structure.", "It occurs at lower shear stresses than slip.", "It frequently occurs in hexagonal closed-packed structures."],
        "answer": "It frequently occurs in hexagonal closed-packed structures."
    },
    {
        "question": "A 20-microfarad capacitor is connected to a source of potential difference of 230V. What is the resulting charge on the capacitor?",
        "choices": ["4.8 x10^-3 C", "4.2 x10^-3 C", "4.6 x10^-3 C", "4.4 x10^-3 C"],
        "answer": "4.6 x10^-3 C"
    },
    {
        "question": "What is in a machine that it is capable of absorbing and organizing new data, learning new concept, reasoning logically and responding to inquiries?",
        "choices": ["Self-process intelligence", "Artificial intelligence", " Man-free intelligence", " None of these"],
        "answer": "Artificial intelligence"
    },
    {
        "question": "Who is responsible for ensuring that the project is completed successfully as measured by time, cost, performance and stakeholder satisfaction?",
        "choices": ["Functional manager", "Project manager", "Chief engineer", "Department supervisor"],
        "answer": "Project manager"
    },
    {
        "question": "How tall does a wall mirror have to be in order for you to see all of yourself in the mirror? Imagine you stand a distance 'd' from the mirror and your height is 'h' and L is the length of mirror required.",
        "choices": ["L=1/5 h", "L=1/4 h", "L=1/2 h", "L=1/3 h"],
        "answer": "L=1/2 h"
    },
    {
        "question": "What is a coal that has been previously burned in an oxygen-poor environment?",
        "choices": ["Tuyere", "Diamond", "Ore", "Coke"],
        "answer": "Coke"
    },
    {
        "question": "What is the RMS velocity of CO2 at 27ºC?",
        "choices": ["412 m/sec", "421 m/sec", "517 m/sec", "571 m/sec"],
        "answer": "412 m/sec"
    },
    {
        "question": "Which of the following is the allowed value for Poisson ratio of a material?",
        "choices": ["0.35", "0.55", "0.61", "0.53"],
        "answer": "0.35"
    },
    {
        "question": "A Kaplan turbine is _____.",
        "choices": ["A high head mixed flow turbine", "An impulse turbine, inward flow", "A reaction turbine, outward flow", "Low head axial flow turbine"],
        "answer": "Low head axial flow turbine"
    },
    {
        "question": "Which of the following would be identified with control volume in thermodynamics?",
        "choices": ["Expansion of gas in a cylinder after combustion", "Compression of air in a cylinder", "Filling a tire with air at a service station", "The goodyear blimp during flight"],
        "answer": "Filling a tire with air at a service station"
    },
    {
        "question": "How much force is needed to keep a 85-kg cart moving at constant velocity on a level concrete road? Use ‘I = 0.04 for coefficient of friction.",
        "choices": ["35.28 N", "37.24 N", "33.32 N", " 31.36 N"],
        "answer": "33.32 N"
    },
    {
        "question": "What is the molecular weight of Nitric acid (HNO3)?",
        "choices": ["47.01", "63.01", "31.01", "65.02"],
        "answer": "63.01"
    },
    {
        "question": "The “earth” best defines of which of the following term?",
        "choices": ["bonding", "ground electrode", "ground", "grounded conductor"],
        "answer": "ground"
    },
    {
        "question": "A car travels 100 miles to city X in 2 hours, then travels 200 miles to city Y in 3 hours. What is the average speed of the car for the trip?",
        "choices": ["45 mph", "66.7 mph", "58.5 mph", "60 mph"],
        "answer": "60 mph"
    },
    {
        "question": "Pedro will inherit P 500,000 in three years has a savings account that pays 6% per year, compounded annually. What is the present worth of Pedro’s inheritance?",
        "choices": ["P413,924.55", "P425,806.83", "P419,809.64", "P431,942.55"],
        "answer": "P419,809.64"
    },
    {
        "question": "What refers to the point in which bending moment changes sign through a zero value in strength of materials?",
        "choices": ["Zero stress point", "Critical point", "Point of contra-flexure", "Point of inflection"],
        "answer": "Point of contra-flexure"
    },
    {
        "question": "What would be the most important factor under consideration for the site selection of a thermal plant?",
        "choices": ["Availability of fuel area", "Availability of water", "Distance from the populated", "Cost and the type of land."],
        "answer": "Availability of water"
    },
    {
        "question": "Under OSHS Rule 1040, a work place with less than 100 worker is under what type and composition of Health and Safety.",
        "choices": ["Type A", "Type B", "Type C", "Type D"],
        "answer": "Type B"
    },
    {
        "question": "The usual function of a disconnect switches in high voltage circuits is to ____.",
        "choices": ["Open the circuit in the event of an overload", "Open or close the circuit under load", "Maintain continuity of service", "Isolate from energized buses, equipment which are not in service"],
        "answer": "Isolate from energized buses, equipment which are not in service"
    },
    {
        "question": "Which of the following statements is FALSE?",
        "choices": ["Steady flow does not change with time at any point.", "The Navier-Stokes equation is the equation of motion for a viscous Newtonian", "Bernoulli’s equation only holds on the same streamline.", "The Reynold’s number is the ratio of the viscous force to the inertial force"],
        "answer": "The Reynold’s number is the ratio of the viscous force to the inertial force"
    },
    {
        "question": "Eighty grams of brass (specific heat 0.092 Cal/g-K) at 292 degree C is added to 200 g of water (specific heat 1.0 Cal/g-K) at 14 degree C in an insulated container of negligible heat capacity. What is the final temperature in degree C?",
        "choices": ["29.3", "23.9", "23.5", "25.3"],
        "answer": "23.9"
    },
    {
        "question": "Characters in MATLAB are represented in their value in memory?",
        "choices": ["decimal", "ASCII", "hexadecimal", "string"],
        "answer": "ASCII"
    },

    {
        "question": "What form of software can also be called firmware?",
        "choices": ["Cache memory", "Operating system", "system BIOS", "random memory"],
        "answer": "system BIOS"
    },
    {
        "question": "What are the Van der Waals forces?",
        "choices": ["Primary bonds between atoms", "Forces not present in liquids", "Forces between electrons and protons", "Weak secondary bonds between atoms"],
        "answer": "Weak secondary bonds between atoms"
    },
    {
        "question": "In a mixed gas such as air, the rms speed of different molecules are ____",
        "choices": ["proportional to molecular mass", "Independent of molecular mass", "proportional to square root of molecular mass", "inversely proportional to square root of molecular mass"],
        "answer": "inversely proportional to square root of molecular mass"
    },
    {
        "question": "Given COP of 4, and QL of 20,000 kJ/hr, what is the approximate horsepower?",
        "choices": ["1", "2", "3", "4"],
        "answer": "2"
    },
    {
        "question": "It is the process of unifying the power of technology with entrepreneurial skills and capabilities.",
        "choices": ["Entrepreneurship", "Technopreneurship", "Innovations", "Business management"],
        "answer": "Technopreneurship"
    },
    {
        "question": "This MATLAB command clears all data and variables stored in memory:",
        "choices": ["clc", "delete", "deallocate", "clear"],
        "answer": "clear"
    },
    {
        "question": "Encryption can provide ALL of the following features of information systems security EXCEPT:",
        "choices": ["Confidentiality", "Integrity", "authenticity", "privacy"],
        "answer": "authenticity"
    },
    {
        "question": "Which of the following is NOT a unit of work?",
        "choices": ["N-m", "erg", "dyne", "kg-sq. m/sq. sec"],
        "answer": "dyne"
    },
    {
        "question": "Protection of workers from impact penetration from falling and flying objects, blows, and from limited electric shock and burns shall be provided where there is reasonable probability of exposure to such hazards.",
        "choices": ["Hard Hat", "Toe Board", "Harness", "Belt"],
        "answer": "Hard Hat"
    },
    {
        "question": "At what annual interest rate is P 500 one year ago equivalent to P 600 today?",
        "choices": ["18%", "20%", "17%", "23%"],
        "answer": "20%"
    },
    {
        "question": "An electric motor takes 5 Amp from a 220 Volt line. Determine the energy in kWh if supplied to the motor in 2 hours.",
        "choices": ["2.2", "1.5", "4.4", "3.4"],
        "answer": "2.2"
    },
    {
        "question": "Find the rate of conduction heat transfer in W/m^2 through a 1.5 cm thick hardwood board, k = 0.16 w/m-K, with a temperature difference between the two sides of 20-degree C.",
        "choices": ["3,125", "213", "0.048", "8,333"],
        "answer": "213"
    },
    {
        "question": "Which of the following is 'Murang Kuryente Act'?",
        "choices": ["R.A. 11361", "R.A. 11285", "R.A. 11371", "R.A. 10968"],
        "answer": "R.A. 11371"
    },
    {
        "question": "What is the interest where the interest occurred over the interest period is also subject to the interest rate in the next period?",
        "choices": ["Quarterly interest", "Compound interest", "Simple interest", "Annual interest"],
        "answer": "Compound interest"
    },
    {
        "question": "Under what conditions is mass conserved in fluid flow?",
        "choices": ["The fluid is barotropic", "The flow is isentropic", "The fluid is incompressible", "It is always conserved"],
        "answer": "The fluid is incompressible"
    },
    {
        "question": "What refers to the measure of the disorder present in a given substance or system?",
        "choices": ["Entropy", "Enthalpy", "Heat capacity", "Molar heat"],
        "answer": "Entropy"
    },
    {
        "question": "What is the term used when an American citizen is allowed to practice his profession, e.g., electrical engineering profession, here in the Philippines?",
        "choices": ["APEC registry", "ACPE registry", "Foreign Reciprocity", "ASEAN Engr"],
        "answer": "Foreign Reciprocity"
    },
    {
        "question": "The fastest method to transfer data wirelessly is ______.",
        "choices": ["GPRS", "Infrared", "802.11", "Bluetooth"],
        "answer": "802.11"
    },
    {
        "question": "Multiplying (912) base 8 by (111) base 2 in Hexadecimal base 16 is?",
        "choices": ["46", "11", "A7", "FE"],
        "answer": "A7"
    },
    {
        "question": "A man driving a car at 45 mph suddenly sees an object in the road 60 feet ahead. What constant deceleration is required to stop the car in this distance?",
        "choices": ["–42.6 ft/sec²", "–41.8 ft/sec²", "–36.3 ft/sec²", "–35.3 ft/sec²"],
        "answer": "–35.3 ft/sec²"
    },
    {
        "question": "A 1.2 µF capacitor is charged to 3 kVolt. What is the energy stored in the capacitor?",
        "choices": ["4.5 J", "6.7 J", "7.6 J", "5.4 J"],
        "answer": "5.4 J"
    },
    {
        "question": "In MATLAB, this keyword immediately moves to the next iteration of the loop:",
        "choices": ["update", "goto", "continue", "break"],
        "answer": "continue"
    },
    {
        "question": "What would be the printed result of the following instructions? 10 DEF FNA(X) = X**2+1/X 20 PRINT FNA(2) 30 END",
        "choices": ["3.2", "4.5", "6.5", "7.2"],
        "answer": "4.5"
    },
    {
        "question": "Determine the maximum shearing stress in a helical steel spring composed of 20 turns of 20 mm diameter wire on a mean radius of 80 mm when the spring is supporting a load of 2 kN.",
        "choices": ["121 MPa", "429 MPa", "370 MPa", "529 MPa"],
        "answer": "529 MPa"
    },
    {
        "question": "For a project manager to have an efficient means of identifying and communicating the planned activities and their interrelationships, he must use a network technique. One of the network techniques is commonly known as PERT. What does PERT stand for?",
        "choices": ["Project evaluation review technique", "Program evaluation review technique", "Path evaluation review technology", "Program execution review technique"],
        "answer": "Program evaluation review technique"
    },
    {
        "question": "What is the change in length (in cm) of a steel bar that is heated to 125°C, where the coefficient of expansion for steel = 12 microcm/cm/°C and a length = 3 m?",
        "choices": ["0.15", "0.79", "0.45", "0.55"],
        "answer": "0.45"
    },
    {
        "question": "What is the combination of laminar flow and turbulent flow?",
        "choices": ["Turbulent flow", "Laminar flow", "Critical flow", "Transitional flow"],
        "answer": "Transitional flow"
    },
    {
        "question": "How tall does a wall mirror have to be in order for you to see all of yourself in the mirror? Imagine you stand a distance 'd' from the mirror and your height is 'h' and L is the length of mirror required.",
        "choices": ["L=1/5 h", "L=1/4 h", "L=1/2 h", "L=1/3 h"],
        "answer": "L=1/2 h"
    }

    ],





    "MATH": [
    {
        question: "ESAS PALANG",
        choices: ["ESAS PALANG", "ESAS PALANG1", "ESAS PALANG2", "ESAS PALANG3"],
        answer: "ESAS PALANG"
    },
    {
        question: "ESAS PALANG:",
        choices: ["ESAS PALANG", "ESAS PALANG1", "ESAS PALANG2", "ESAS PALANG3"],
        answer: "ESAS PALANG"
    },
    {
        question: "ESAS PALANG",
        choices: ["ESAS PALANG", "ESAS PALAN1G", "ESAS PALANG2", "ESAS PALANG3"],
        answer: "ESAS PALANG"
    }

    ],
};

let questionPool = [];
let currentQuestionIndex = 0;

const menuContainer = document.getElementById("menu-container");
const quizContainer = document.getElementById("quiz-container");
const categoryTitle = document.getElementById("category-title");
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        startQuiz(selectedCategory);
    });
});

function startQuiz(category) {
    questionPool = [...categories[category]]; // Load questions for the selected category
    questionPool = shuffleArray(questionPool); // Shuffle questions for ALL categories
    currentQuestionIndex = 0;

    categoryTitle.textContent = category;
    menuContainer.style.display = "none";
    quizContainer.style.display = "block";

    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    if (questionPool.length === 0) {
        questionElement.textContent = "POTEK ANG GALING!";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";
        return;
    }

    const currentQuestion = questionPool[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => handleChoice(button, choice, currentQuestion.answer));
        choicesContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

function handleChoice(button, selected, correct) {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
        } else if (btn.textContent === selected) {
            btn.classList.add("incorrect");
        }
    });

    if (selected === correct) {
        questionPool.splice(currentQuestionIndex, 1); // Remove question if answered correctly
    } else {
        questionPool.push(questionPool[currentQuestionIndex]); // Add question back to the pool if answered incorrectly
        questionPool.splice(currentQuestionIndex, 1); // Remove current question from this round
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    loadQuestion();
});

restartButton.addEventListener("click", () => {
    menuContainer.style.display = "block";
    quizContainer.style.display = "none";
});
