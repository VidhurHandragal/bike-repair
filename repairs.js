/* Edit this file to update the verified station inventory and repair-guide content. */
const STATION_TOOLS = [
  { name: "Phillips screwdriver", use: "Cross-head fasteners where the size and screw type match. May fit some derailleur limit screws or accessories; do not use it to force a fastener." },
  { name: "Standard screwdriver", use: "Slotted fasteners where the blade fits correctly. Use cautiously; many modern bicycle fasteners are not slotted." },
  { name: "Two steel-core tire levers", use: "Help lift a compatible tire bead over a rim during tire and tube work. Levers do not patch or replace an inner tube." },
  { name: "Headset/pedal wrench", use: "A wrench intended for compatible headset or pedal flats. Confirm size and component design before applying force." },
  { name: "8/10 mm and 9/11 mm cone wrenches", use: "Thin wrenches for compatible cup-and-cone hub adjustment. They are not general-purpose axle wrenches." },
  { name: "Torx T-25 wrench", use: "Fits compatible T-25 fasteners, commonly found on some rotor or component hardware. Use only where the fastener specifies T-25." },
  { name: "Hex key set", use: "Hex fasteners that match the key size. A matching key does not replace a torque wrench when the manufacturer specifies a torque value." },
  { name: "Separate freestanding pump (expected SARIS 26246)", use: "Inflation only after verifying the installed pump head, valve compatibility, pressure gauge (if any), and the pump’s operating instructions." }
];

const REPAIR_CATEGORIES = [
  { id: "tires", title: "Tires and tubes", icon: "01" },
  { id: "drivetrain", title: "Chain and drivetrain", icon: "02" },
  { id: "brakes", title: "Brakes", icon: "03" },
  { id: "gears", title: "Gears and shifting", icon: "04" },
  { id: "wheels", title: "Wheels and components", icon: "05" },
  { id: "maintenance", title: "Cleaning and maintenance", icon: "06" }
];

const REPAIRS = [
  {
    id:"inflate-tire", title:"Inflate a tire correctly", category:"tires", common:true, keywords:["pump","low pressure","soft tire","flat tire","air","pressure"],
    summary:"Bring a tire to a suitable pressure without exceeding its marked limit or damaging the valve.",
    symptoms:["The tire feels soft, sits low, or has lost pressure since the last ride."], difficulty:"Easy, if pump and valve are compatible", time:"5–10 minutes (estimate)",
    available:["Freestanding pump (only after checking its installed head and instructions)"], extra:["A pressure gauge if the installed pump has none","The tire manufacturer’s pressure guidance if markings are unclear"],
    compatibility:"The valve may be Presta or Schrader. The pump may not support both. Pump-head operation and gauge availability are not verified; check the actual unit before use.",
    warning:"Do not force a pump head onto a valve. Do not exceed the tire’s printed maximum or the wheel/rim manufacturer’s lower limit. Stop if the tire is cut, bulging, unseated, or leaking.",
    steps:["Read the pressure range printed on the tire sidewall; check the rim or bicycle maker’s lower limit where provided. Those limits apply to the exact tire and wheel combination.","Identify the valve. For a Presta valve, remove its cap and loosen the small tip nut; do not remove the tip nut. A Schrader valve has a spring-loaded pin like a car tire.","Check the pump’s label and head instructions. Select or configure the correct connection only as its maker describes. Support the valve so it is not bent.","Attach the head without force. Inflate gradually and monitor a gauge if one is present and working. Stay within the applicable pressure limits.","Remove the pump head as instructed, avoiding sideways force on the valve. Tighten a Presta tip nut finger-tight and replace the cap.","Listen and feel for escaping air. Recheck that the tire bead is seated evenly around both sides of the rim."],
    success:["Pressure is within the applicable marked range.","Tire bead sits evenly; valve is straight; no air is escaping."], safety:["Confirm tire and rim are not damaged.","Recheck wheel attachment and both brakes before riding."],
    stop:"The pump will not connect safely, pressure cannot be confirmed where required, the tire will not hold air, the tire bead will not seat, or the tire/rim is damaged.", video:"", related:["valve-types","tire-sizing","replace-tube","pre-ride-check"]
  },
  {
    id:"valve-types", title:"Identify Presta and Schrader valves", category:"tires", common:true, keywords:["valve","pump head","presta","schrader"],
    summary:"Recognize the two common inner-tube valve types before connecting an unfamiliar pump.",
    symptoms:["You are unsure which pump connection to use, or a pump does not fit."], difficulty:"Easy", time:"2 minutes (estimate)",
    available:["Freestanding pump, for visual comparison only; its head compatibility is unverified"], extra:["No parts normally needed"],
    compatibility:"Valve length and rim-hole fit vary. Some wheels require a particular valve type or length; do not enlarge or alter a rim hole.",
    warning:"Do not force, bend, or unscrew valve parts beyond the small Presta tip. Never remove a valve core unless the valve is designed for it and you know how to reinstall it.",
    steps:["Look at the valve stem. A Presta valve is narrow and has a small threaded tip nut that must be loosened before inflation.","A Schrader valve is wider and has a spring-loaded pin in the center, similar to a car tire valve.","Compare the valve with the pump’s printed instructions or diagrams. Confirm support for the exact valve before attaching it.","If the pump’s head type is unclear or incompatible, do not improvise or force it. Use a known-compatible pump."],
    success:["You can identify the valve and the pump instructions explicitly match it."], safety:["Ensure the valve stem is straight and not cracked or loose at the tube."],
    stop:"The valve is damaged, bent, loose at the tube, or no available pump connection is confirmed compatible.", video:"", related:["inflate-tire","tire-sizing","replace-tube"]
  },
  {
    id:"remove-reinstall-wheel", title:"Remove and reinstall a wheel", category:"tires", common:true, keywords:["wheel","quick release","thru axle","flat tire","wheel removal"],
    summary:"Understand the steps and safety checks for a wheel attachment that you can positively identify.",
    symptoms:["You need wheel access to repair a flat or inspect a tire."], difficulty:"Moderate; depends on axle and brakes", time:"10–20 minutes (estimate)",
    available:["Hex key set only if the axle maker specifies a matching hex tool","Freestanding pump if tire inflation is needed and the pump is compatible"], extra:["The bicycle’s instructions; axle-specific tool if required"],
    compatibility:"Quick-release, nutted, and thru-axle systems differ. Disc brakes, hub gears, e-bikes, and some rear derailleur systems need model-specific steps.",
    warning:"Never ride with an uncertain or partly secured wheel. Do not pull a disc-brake lever while the wheel is out unless a rotor spacer is installed. Do not loosen a thru-axle with an unverified tool.",
    steps:["Identify the attachment type and read the bicycle or axle maker’s instructions. If you cannot identify it, stop and ask a mechanic.","Shift a derailleur bicycle to the smallest rear sprocket if the maker’s removal procedure calls for it. Support the bicycle securely; do not rely on an unstable stand.","Release or remove only the identified axle using its specified method. Note washers, springs, spacers, and the wheel’s orientation.","Guide the wheel into the frame or fork fully. Ensure the rotor sits between the pads or the rim is centered in the brake.","Secure the quick-release, axle, or nuts exactly as the maker specifies. A quick-release lever must close firmly and safely; do not use a loose lever as a nut.","Spin the wheel, check that it is centered, and test the brake. Check the tire and attachment again before riding."],
    success:["Wheel is fully seated and centered; attachment is secured by its designed method.","Wheel spins freely without unsafe brake contact; brake works normally."], safety:["Check wheel attachment, brake operation, and tire condition.","If any doubt remains, do not ride."],
    stop:"Attachment instructions are unavailable or unclear; axle, dropout, rotor, or frame is damaged; wheel will not seat; or brake function is abnormal.", video:"", related:["replace-tube","pre-ride-check","wheel-inspection"]
  },
  {
    id:"remove-tire-tube", title:"Remove a tire and inner tube", category:"tires", common:false, keywords:["tire lever","tube","flat","wheel"],
    summary:"Remove a compatible tire and tube carefully for inspection, patching, or replacement.",
    symptoms:["A puncture or tube problem has been confirmed and the wheel is safely removed."], difficulty:"Moderate", time:"15–30 minutes (estimate)",
    available:["Two steel-core tire levers"], extra:["Compatible replacement tube or repair supplies","Wheel-specific axle tools if required"],
    compatibility:"Tire bead fit, rim shape, tubeless setups, and tire direction vary. Some tires are too tight for levers or require a specific procedure.",
    warning:"Do not use a sharp metal tool or damage the rim, tube, or tire bead. If the wheel is tubeless or has a carbon rim and you are unsure, consult its maker or a mechanic.",
    steps:["Remove the wheel using its axle-specific instructions and fully deflate the tube. For a Presta valve, loosen its tip; for Schrader, depress the valve core carefully.","Push both tire beads toward the center channel of the rim around the full wheel to create slack.","Starting opposite the valve, ease one bead over the rim edge with a tire lever. Use a second lever only as needed and avoid pinching the tube.","Remove the tube, then remove the tire only if needed. Work around the rim without scraping the rim tape or pulling the valve sideways.","Inspect the tire inside and out for embedded glass, wire, cuts, or bulges. Carefully remove debris; avoid running bare fingers over sharp objects.","When reinstalling, fit one tire bead, place the tube lightly inflated if appropriate, align its valve, then fit the second bead by hand where possible. Check the tube is not trapped."],
    success:["Tube is removed without damage to rim, tire, or valve.","Any debris or damage is identified before installing a tube."], safety:["Check the tire bead and rim tape before inflation.","Reinstall and secure the wheel using its specific instructions."],
    stop:"Tire casing is cut/bulging, rim is damaged, tubeless setup is unfamiliar, or bead cannot be seated safely.", video:"", related:["flat-cause","patch-tube","replace-tube","replace-tire"]
  },
  {
    id:"flat-cause", title:"Diagnose the cause of a flat tire", category:"tires", common:false, keywords:["puncture","leak","tube","flat"],
    summary:"Find why a tire lost air so that the same puncture does not happen again.",
    symptoms:["A tire is flat, repeatedly loses air, or a replacement tube punctured soon after installation."], difficulty:"Easy to moderate", time:"10–25 minutes (estimate)",
    available:["Two steel-core tire levers for compatible tires"], extra:["Replacement tube or patch materials if needed","Water and basin only if available and suitable for locating a leak"],
    compatibility:"A tubeless tire uses sealant and different procedures. Some punctures or tire damage cannot be repaired roadside.",
    warning:"Look for sharp debris without pressing fingers along the tire interior. Do not ride on a flat tire or one with a damaged casing.",
    steps:["Remove the wheel and tube using the bicycle’s axle instructions and the tire-removal guide.","Find the leak by listening or feeling near the tube. If safe and available, a small amount of water can reveal bubbles; dry the tube before repair.","Note where the hole is relative to the valve and transfer that position to the tire and rim. This can identify a tread puncture, sidewall cut, or rim-side pinch.","Inspect the tire tread and inside for embedded debris, glass, wire, or damage. Carefully remove any object with a suitable tool, not bare fingers.","Check rim tape, spoke holes, valve hole, tire bead, and tube for sharp edges or displacement.","Choose a compatible patch or replacement tube only after the cause is understood. Check again before reinstalling."],
    success:["The puncture source is identified or reasonably ruled out; no dangerous tire or rim damage remains."], safety:["Do not use a tube as a fix for damaged tire casing or rim.","Verify pressure and wheel/brake safety after reassembly."],
    stop:"A cut, bulge, exposed casing, damaged rim, repeated unexplained puncture, or tubeless fault is present.", video:"", related:["remove-tire-tube","patch-tube","replace-tube","replace-tire"]
  },
  {
    id:"patch-tube", title:"Patch an inner tube", category:"tires", common:false, keywords:["patch kit","puncture","flat","adhesive"],
    summary:"Patch a tube only when you have a compatible kit and can follow its instructions.",
    symptoms:["A small puncture has been located in an otherwise sound tube."], difficulty:"Moderate", time:"15–30 minutes plus cure time (estimate)",
    available:["Two steel-core tire levers for tube removal"], extra:["Compatible patch kit; adhesive if required; abrasive material if kit specifies","Pump compatible with the valve"],
    compatibility:"Patch methods differ: vulcanizing patches use adhesive and curing time; adhesive-free patches follow different instructions. Follow the kit maker.",
    warning:"No patch, adhesive, or tube is confirmed supplied. Do not apply a patch over a valve base, tear, seam failure, or large/irregular hole unless the kit explicitly allows it.",
    steps:["Remove the wheel and tube safely. Find and mark the leak, then identify and remove the cause from the tire.","Clean and prepare the tube exactly as the patch kit directs. Avoid touching the prepared surface with oily or dirty hands.","Apply the correct patch and observe the kit’s pressure and cure-time instructions. Do not assume adhesive-free and adhesive patches work alike.","Check the patch edge is bonded. Add a little air and confirm the leak is gone if the kit permits.","Recheck the tire interior and rim tape; reinstall the tube without pinching it and inflate within the limits."],
    success:["Patch is fully bonded and holds air; the puncture source is removed."], safety:["Check the tire casing and rim before reassembly.","Test the wheel, brake, and tire pressure before riding."],
    stop:"Tube has multiple holes, a tear, damaged valve, or a leak at the patch; compatible repair materials are unavailable.", video:"", related:["flat-cause","remove-tire-tube","replace-tube"]
  },
  {
    id:"replace-tube", title:"Replace an inner tube", category:"tires", common:true, keywords:["tube","flat tire","puncture","wheel","tire levers"],
    summary:"Choose a tube that matches the wheel and tire, then install it without pinching it.",
    symptoms:["A tube is punctured, damaged, or will not hold a patch."], difficulty:"Moderate", time:"20–40 minutes (estimate)",
    available:["Two steel-core tire levers","Freestanding pump only if its head is compatible with the valve"], extra:["Correct replacement tube; its size and valve must match","Axle-specific tool if needed"],
    compatibility:"Match the tube to tire diameter and width and select the correct valve type and length. Read tire markings; wheel standards vary.",
    warning:"A new tube will puncture again if debris remains or the tire/rim is damaged. Do not inflate a tube trapped under the tire bead.",
    steps:["Identify the wheel attachment, remove the wheel, and release all remaining air from the tube.","Remove one tire bead using compatible levers. Remove the old tube and locate the puncture cause; inspect tire and rim tape carefully.","Confirm the replacement tube size range and valve type/length match the tire and rim. Do not stretch an incompatible tube to fit.","Put a small amount of air in the tube if appropriate so it holds shape. Fit the valve through the rim hole and place the tube evenly inside the tire.","Fit the tire bead carefully. Before inflation, inspect both sides all the way around and ensure no tube is visible or trapped beneath the bead.","Inflate gradually within tire and rim limits. Confirm the bead is evenly seated, reinstall the wheel per the axle instructions, and test the brake."],
    success:["Tube holds air, bead is evenly seated, wheel is securely attached, and brake functions normally."], safety:["Check tire condition, wheel attachment, and brake operation.","Perform the complete pre-ride checklist."],
    stop:"Correct tube cannot be identified; rim/tire is damaged; tire bead will not seat; or wheel/brake attachment is uncertain.", video:"", related:["flat-cause","remove-tire-tube","inflate-tire","remove-reinstall-wheel"]
  },
  {
    id:"replace-tire", title:"Replace a worn or damaged tire", category:"tires", common:false, keywords:["tire wear","cut","bulge","casing","replacement"],
    summary:"Recognize unsafe tire wear and select a compatible replacement before riding.",
    symptoms:["Tread is worn through, casing threads show, sidewall is cut, or a bulge appears."], difficulty:"Moderate to advanced", time:"30–60 minutes (estimate)",
    available:["Two steel-core tire levers if needed"], extra:["Compatible replacement tire and tube or tubeless supplies","Manufacturer instructions and wheel-specific tools"],
    compatibility:"Match wheel diameter, tire width/clearance, bead type, tubeless compatibility, direction, and pressure limits. Verify frame/fork clearance.",
    warning:"Do not ride on a bulging tire, exposed casing, deep cut, or tire that will not remain seated. A wrong tire size or excessive width can contact the frame or fork.",
    steps:["Inspect the tire for wear indicators, cuts, exposed casing, bead damage, or bulges. If damaged, stop riding.","Read the current tire size and specifications; verify the replacement matches the rim and has adequate frame/fork clearance.","Follow the wheel and tire maker’s procedure for removing and fitting the tire. Inspect rim tape and replace it only with compatible material.","Install the tire in its indicated direction, if marked. Confirm the tube or tubeless setup is correctly positioned with no trapped material.","Inflate within both tire and rim limits, check the bead line evenly around the rim, and spin the wheel to check clearance.","Confirm wheel attachment and brake function before a cautious stationary check."],
    success:["Replacement is compatible, undamaged, evenly seated, holds pressure, and clears frame/fork."], safety:["Verify attachment, brake operation, and tire clearance.","Do not ride if any fit or seating question remains."],
    stop:"Compatibility or clearance cannot be confirmed; rim or tire bead is damaged; tubeless setup is unfamiliar; or tire does not seat evenly.", video:"", related:["tire-sizing","inflate-tire","remove-tire-tube","pre-ride-check"]
  },
  {
    id:"tire-sizing", title:"Understand tire sizing and pressure limits", category:"tires", common:false, keywords:["tire size","pressure","sidewall","rim"],
    summary:"Use the markings and manufacturer guidance to choose a tire and safe inflation range.",
    symptoms:["You need to replace a tire or are unsure what pressure is appropriate."], difficulty:"Easy", time:"5 minutes (estimate)",
    available:[], extra:["Tire, rim, and bicycle manufacturer specifications"],
    compatibility:"Tire labels may show different sizing systems. The numbers must correspond to the wheel’s diameter and width range; do not rely on appearance alone.",
    warning:"Never exceed the tire’s printed maximum or a lower wheel/rim limit. Maximum pressure is not necessarily the best riding pressure.",
    steps:["Read the full size marking on the tire sidewall, including its diameter and width. Record other markings such as direction, tubeless status, and pressure range.","Compare the marked size to the wheel/rim specification and bicycle maker’s permitted tire sizes.","Check the tire’s minimum/maximum pressure and any lower limit specified for the rim or wheel. Use the most restrictive applicable limit.","When replacing a tire, confirm width and clearance at the frame, fork, brakes, and fenders; allow for wheel flex and debris clearance as the maker recommends.","For uncertain standards or missing markings, contact the bicycle, tire, or wheel maker or a qualified mechanic."],
    success:["Tire size, compatibility, clearance, and pressure limits are positively confirmed."], safety:["Check tire condition and wheel attachment before riding."],
    stop:"Size or pressure limits cannot be confirmed, or any component maker’s limits conflict or are missing.", video:"", related:["inflate-tire","replace-tire","replace-tube"]
  },

  {
    id:"dropped-chain", title:"Fix a dropped chain", category:"drivetrain", common:true, keywords:["chain","gear","pedal","chain fell off"],
    summary:"Put an intact chain back on the chainring or sprocket and find out why it came off.",
    symptoms:["The chain has fallen off a front chainring or rear sprocket; pedals may turn freely."], difficulty:"Easy if chain is intact", time:"5–10 minutes (estimate)",
    available:[], extra:["Disposable gloves or cloth if available"],
    compatibility:"Front derailleurs, chain guards, internal gear hubs, and some e-bikes need different procedures. Do not move an e-bike drivetrain with electrical assistance active.",
    warning:"Do not put fingers between chain and gears while turning pedals. Stop if chain is twisted, stiff, cracked, or jammed. Never ride with a damaged or unreliable chain.",
    steps:["Stop the bicycle, switch off pedal assistance if fitted, and make sure it cannot roll. Check that the chain is intact and not trapped between frame and gears.","If it is safe to do so, guide the chain onto the smallest front chainring or rear sprocket without placing fingers between moving parts.","Turn the crank slowly by hand in the forward direction while keeping fingers clear. Do not force a jammed chain.","Shift gently through the nearby gears only after the chain runs smoothly. Inspect for a bent derailleur, damaged teeth, or a stiff link.","If the chain repeatedly drops or does not run freely, stop; adjustment or damaged parts may need a mechanic."],
    success:["Chain runs smoothly through a few slow pedal turns and stays on the gears."], safety:["Check chain and drivetrain for damage and secure the bicycle before testing.","Do not ride if chain skips, jams, or drops again."],
    stop:"Chain is broken, twisted, stiff, jammed, or repeatedly drops; derailleur or teeth are damaged.", video:"", related:["broken-chain","clean-lube-chain","shifting-problems"]
  },
  {
    id:"clean-lube-chain", title:"Clean and lubricate a chain", category:"drivetrain", common:false, keywords:["chain lube","maintenance","cleaning","drivetrain"],
    summary:"Remove grime and apply bicycle-chain lubricant sparingly without contaminating brakes.",
    symptoms:["Chain is visibly dirty, dry, noisy, or shifts poorly despite correct setup."], difficulty:"Easy", time:"15–30 minutes (estimate)",
    available:[], extra:["Bicycle chain lubricant appropriate for conditions","Clean cloth and suitable chain-cleaning supplies"],
    compatibility:"Lubricant types vary by riding conditions and chain maker. Follow product and drivetrain instructions.",
    warning:"No lubricant or cleaning supplies are confirmed at the station. Keep all lubricant and cleaner off disc rotors, disc pads, and rim braking surfaces. Do not use a pressure washer.",
    steps:["Keep the bicycle stable and switch off e-bike assistance. Protect brake rotors and pads from oil and solvent.","Wipe the chain with a clean cloth. If deeper cleaning is needed, use a bicycle-compatible product according to its label; do not flush bearings or brakes.","Let the chain dry fully if the product requires it. Apply a small drop of appropriate lubricant to each roller while slowly turning the crank by hand.","Allow lubricant to penetrate as directed, then wipe the chain exterior thoroughly. Lubricant belongs inside the moving links, not on the outside.","Check shifting and braking remain uncontaminated. Dispose of oily cloths and cleaner according to product instructions."],
    success:["Chain moves quietly and freely; its outer plates are not wet with excess oil; braking surfaces are clean."], safety:["Confirm no lubricant reached brakes or tires.","Test gears and brakes while stationary."],
    stop:"Chain is damaged, badly corroded, or stiff after care; any lubricant contacts disc pads/rotor or rim braking surface.", video:"", related:["chain-wear","chain-replacement","dropped-chain"]
  },
  {
    id:"chain-wear", title:"Identify chain wear", category:"drivetrain", common:false, keywords:["chain checker","stretch","cassette","wear"],
    summary:"Understand chain wear and why a measuring tool is needed before replacement decisions.",
    symptoms:["Shifting deteriorates, the chain skips, or drivetrain parts have high mileage."], difficulty:"Easy to understand; measurement needs a tool", time:"5 minutes (estimate)",
    available:[], extra:["A chain-wear measuring tool compatible with the chain; not confirmed at this station"],
    compatibility:"Wear thresholds depend on chain type, drivetrain, and measuring tool method. Follow the gauge and drivetrain maker’s instructions.",
    warning:"The station inventory does not include a confirmed chain checker. Visual inspection alone cannot reliably measure chain wear. Do not replace parts based only on a guessed measurement.",
    steps:["Look for rust, stiff links, damaged plates, or rollers. These are reasons to stop and inspect, but appearance does not give a precise wear reading.","Use an appropriate chain-wear gauge only if available and follow its instructions for your chain type. Do not force the tool between rollers.","Compare the reading to the chain and drivetrain maker’s replacement guidance.","If no compatible gauge is available or the result is borderline, ask a qualified mechanic to measure it. Excess wear can damage sprockets."],
    success:["Chain wear is measured with a compatible gauge and interpreted using manufacturer guidance."], safety:["Check the chain for damage and smooth movement before riding."],
    stop:"Chain is cracked, corroded, stiff, skips under load, or wear cannot be assessed.", video:"", related:["chain-replacement","broken-chain","clean-lube-chain"]
  },
  {
    id:"chain-replacement", title:"Recognize when a chain needs replacement", category:"drivetrain", common:false, keywords:["replace chain","chain wear","skipping"],
    summary:"Learn the signs that call for inspection and correct chain replacement.",
    symptoms:["A wear gauge shows the maker’s limit, chain skips, or links are damaged."], difficulty:"Moderate; replacement is drivetrain-specific", time:"30–60 minutes (estimate)",
    available:[], extra:["Compatible replacement chain, chain tool and/or joining link as specified","Compatibility information for drivetrain"],
    compatibility:"Chain width, speed count, direction, length, and joining method vary. Use the drivetrain maker’s exact compatibility instructions.",
    warning:"No chain tool, replacement chain, quick link, or quick-link pliers are confirmed at this station. Do not shorten or join a chain using improvised tools.",
    steps:["Measure wear with a compatible gauge and compare with manufacturer limits. Inspect sprockets for damage and confirm whether replacement is needed.","Identify drivetrain speed and the manufacturer-approved chain and joining method. Do not assume chains or links are interchangeable.","Have the required chain tool and compatible connector available. Follow the maker’s procedure for chain length, orientation, and connection.","Check that the joining link is fully engaged and the chain bends freely at the connection.","Turn the drivetrain by hand and test shifting and braking while stationary. A mechanic should inspect if the chain skips or connection is uncertain."],
    success:["A compatible chain is connected using its specified method, flexes freely, and shifts consistently."], safety:["Do not ride if chain connection or shifting is questionable."],
    stop:"Required parts/tools are unavailable, compatibility is uncertain, connector does not fully engage, or the chain skips.", video:"", related:["chain-wear","broken-chain","shifting-problems"]
  },
  {
    id:"broken-chain", title:"Broken chain: what is needed", category:"drivetrain", common:false, keywords:["broken chain","quick link","chain tool","roadside"],
    summary:"A broken chain needs drivetrain-compatible parts and tools; this station alone is not confirmed to be enough.",
    symptoms:["A chain has separated, a plate is cracked, or a joining link has failed."], difficulty:"Advanced", time:"Variable; do not ride until repaired",
    available:[], extra:["Compatible chain tool","Correct replacement quick link or joining component","Quick-link pliers if specified","Manufacturer instructions"],
    compatibility:"Connector type, chain width/speed, direction, and reuse rules vary. Some links are single-use; consult the drivetrain maker.",
    warning:"The station does not confirm a chain tool, quick-link pliers, replacement link, or replacement chain. Do not ride a broken chain or push a damaged link back together.",
    steps:["Stop and inspect the chain and nearby drivetrain parts without turning the pedals under load.","Do not attempt a repair unless you have a chain tool and connector explicitly compatible with this chain and can follow the manufacturer’s method.","Remove damaged links and size the chain only according to drivetrain instructions; an incorrectly sized chain can damage the drivetrain or cause loss of control.","Install the specified connector and verify it is fully locked and articulates freely. If anything is uncertain, have a mechanic do the repair.","After repair, test shifting and chain retention while stationary; do not test ride until the entire bicycle passes a safety check."],
    success:["Only a compatible repair performed with correct parts/tools and verified by the maker can be considered complete."], safety:["If stranded, walk the bicycle or arrange transport; do not ride with a broken/uncertain chain."],
    stop:"Always stop if compatible tools/parts or instructions are unavailable, or drivetrain damage is present.", video:"", related:["chain-replacement","chain-wear","dropped-chain"]
  },
  {
    id:"quick-link-compatibility", title:"Understand quick links and chain tools", category:"drivetrain", common:false, keywords:["quick link","master link","pliers","chain tool"],
    summary:"Quick links are drivetrain-specific joining parts, not universal emergency connectors.",
    symptoms:["You are planning a chain repair or deciding what supplies to bring."], difficulty:"Easy to understand", time:"5 minutes (estimate)",
    available:[], extra:["Chain maker’s compatibility chart and instructions; correct link and any specified pliers/tool"],
    compatibility:"Match manufacturer, speed, chain model/width, direction, reuse status, and connector style. Chain tools also must fit the chain.",
    warning:"None of the chain tool, pliers, spare link, or lubricant is confirmed supplied at this station. Never use an apparently similar but incompatible connector.",
    steps:["Read the chain markings and identify the drivetrain’s number of speeds and chain model where possible.","Check the chain maker’s compatibility information for the exact quick link and whether it is reusable.","Confirm which tool is required to remove the chain and close/open the link; some systems use a tool-specific procedure.","Follow the maker’s installation direction and locking check. If instructions or compatibility are unclear, use a qualified mechanic."],
    success:["Connector and tools are explicitly approved for the exact chain, and installation is verified by instructions."], safety:["Check the joined chain for free articulation and secure engagement."],
    stop:"Compatibility is unknown, the chain is damaged, or correct parts and tools are not present.", video:"", related:["broken-chain","chain-replacement","chain-wear"]
  },

  {
    id:"rim-brake-inspect", title:"Inspect rim brakes", category:"brakes", common:true, keywords:["brakes","rim brake","pads","cable"],
    summary:"Check rim-brake pads, cables, levers, and braking surfaces before riding.",
    symptoms:["Brake feels weak, noisy, uneven, or lever travel has changed."], difficulty:"Easy", time:"5–10 minutes (estimate)",
    available:["Hex key set or screwdrivers only where the specific brake fastener matches"], extra:["Replacement pads or cable parts if damaged; compatible tools"],
    compatibility:"Brake styles, pad compounds, rim materials, and retention hardware vary. Follow the brake and rim maker’s instructions.",
    warning:"Do not ride if a brake does not stop the bicycle reliably, a cable is frayed, a pad is loose, or pads contact the tire. Do not contaminate the rim braking track.",
    steps:["With the bicycle stationary, squeeze each lever separately. It should feel consistent and should not bottom against the handlebar.","Inspect pads for wear indicators, cracks, contamination, loose fasteners, and correct alignment. Confirm pads contact the rim braking track, not tire.","Inspect the rim braking surface for cracks, deep grooves, oil, or damage. Check cable for fraying, rust, kinks, or loose housing.","Spin wheel and apply brake gently. Check pad clearance and that the wheel releases when the lever is released.","Do not adjust unfamiliar hardware by trial and error; use the brake maker’s instructions."],
    success:["Both brakes engage firmly, release fully, and pads contact only the intended braking surface."], safety:["Test both brakes while stationary and walk the bicycle to confirm stopping before any ride."],
    stop:"Brake is weak, lever bottoms out, cable is damaged, pads are loose/worn/contaminated, or rim is damaged.", video:"", related:["rim-brake-adjust","brake-pads","brake-lever-cable","pre-ride-check"]
  },
  {
    id:"rim-brake-adjust", title:"Basic rim-brake adjustments", category:"brakes", common:false, keywords:["brake adjustment","rim brake","pad alignment","cable"],
    summary:"Make only a simple adjustment when the brake type and manufacturer procedure are clearly understood.",
    symptoms:["Pads are visibly misaligned or rub after wheel installation."], difficulty:"Moderate; brakes are safety-critical", time:"10–20 minutes (estimate)",
    available:["Matching hex key or screwdriver only if required by the brake’s exact fasteners"], extra:["Brake maker’s instructions; correct replacement parts if needed"],
    compatibility:"Caliper, cantilever, and V-brake designs differ. Cable tension and pad alignment procedures are not interchangeable.",
    warning:"A misadjusted brake can fail or lock a wheel. Do not ride until both brakes operate correctly. Never lubricate brake pads or rim braking surfaces.",
    steps:["Identify the brake model and retrieve its manufacturer instructions. Inspect first; do not adjust to hide worn pads, damaged cable, or wheel problems.","If a pad needs alignment, use only its intended fastener and the brake maker’s method. Keep the pad off the tire and fully on the rim track.","Use a matching tool only. Do not guess torque; if a manufacturer specifies a torque value, a torque wrench may be required and is not confirmed at the station.","Check cable security and lever travel by hand. Ensure the brake fully releases and the wheel spins without unintended rubbing.","Test each brake while stationary and walk the bicycle, checking reliable stopping before riding."],
    success:["Pads align correctly, brake engages and releases, and stopping is firm and predictable."], safety:["Reinspect all fasteners and test both brakes before any ride."],
    stop:"Brake type or procedure is unclear, fastener cannot be secured to specification, cable/pad is damaged, or brake performance is doubtful.", video:"", related:["rim-brake-inspect","brake-pads","brake-lever-cable"]
  },
  {
    id:"brake-pads", title:"Identify worn or damaged brake pads", category:"brakes", common:false, keywords:["brake pads","worn","replacement","rim","disc"],
    summary:"Recognize pad wear and select compatible replacements; brake systems use different pads.",
    symptoms:["Wear indicator reached, pad is cracked, contaminated, loose, or braking has weakened."], difficulty:"Easy to inspect", time:"5 minutes (estimate)",
    available:["Matching hex key only if a compatible pad retention fastener needs inspection"], extra:["Correct brake-specific replacement pads and manufacturer instructions"],
    compatibility:"Rim and disc brake pads are different; disc pad shape and compound vary by caliper, rotor, and use.",
    warning:"Replacement pads are not confirmed supplied. Oil or cleaner on disc pads can cause persistent loss of braking. Do not ride with worn, cracked, loose, or contaminated pads.",
    steps:["Identify whether the bicycle uses rim or disc brakes and read the brake model and pad wear indicators.","Inspect both pads without touching braking surfaces. Look for wear limit, cracks, uneven wear, embedded material, oil, or looseness.","Confirm replacement pad compatibility using the brake maker’s chart; appearance alone is not enough.","If pads need replacement, follow the dedicated compatible brake instructions. Do not attempt disc pad work without the correct parts/tools and safe procedure."],
    success:["Pads are undamaged, adequately thick under their maker’s wear limit, uncontaminated, and secure."], safety:["Test each brake while stationary; do not ride if braking is impaired."],
    stop:"Pad wear limit reached, contamination, cracks, loose pads, uncertain compatibility, or poor braking.", video:"", related:["rim-brake-inspect","disc-brake-inspect","disc-pad-replacement"]
  },
  {
    id:"rim-pad-replacement", title:"Replace rim-brake pads", category:"brakes", common:false, keywords:["rim brakes","replace pads","brake blocks"],
    summary:"Rim-pad replacement depends on brake design and compatible parts; follow the brake maker exactly.",
    symptoms:["Rim-brake pads have reached their wear limit or are damaged."], difficulty:"Moderate; safety-critical", time:"20–40 minutes (estimate)",
    available:["Hex key set if its size matches the pad fastener"], extra:["Brake-compatible pad set; manufacturer instructions; torque wrench if specified"],
    compatibility:"Pad shape, holder, orientation, rim material, toe-in, and fasteners vary. Confirm the exact brake and rim type.",
    warning:"Correct replacement pads are not supplied. Do not ride until pads are aligned, fasteners secure, and both brakes pass testing. Do not guess torque.",
    steps:["Identify the brake, pad holder, and rim material; obtain the exact compatible replacement pads and instructions.","Remove and replace pads only in the specified orientation. Keep washers and spacers in order; do not reuse damaged hardware.","Align pads entirely on the rim braking track and away from the tire. Apply toe-in only if and as specified by the brake maker.","Tighten fasteners to the manufacturer’s specification. A torque wrench may be required and is not confirmed here.","Squeeze the lever repeatedly, check clearance and release, then test stopping at walking pace in a safe area only after a stationary check."],
    success:["Pads are compatible, correctly aligned, secure, and both brakes stop reliably."], safety:["Perform a complete pre-ride check and do not ride if any uncertainty remains."],
    stop:"Correct pads, tools, or torque information are unavailable, or brake performance is not dependable.", video:"", related:["brake-pads","rim-brake-inspect","rim-brake-adjust"]
  },
  {
    id:"disc-brake-inspect", title:"Inspect disc brakes", category:"brakes", common:false, keywords:["disc brake","rotor","pads","hydraulic"],
    summary:"Inspect the rotor, pads, lever, and wheel for obvious disc-brake problems.",
    symptoms:["Scraping, pulsing, weak braking, a changed lever feel, or visible rotor damage."], difficulty:"Easy to inspect", time:"5–10 minutes (estimate)",
    available:["Torx T-25 wrench only if the specific fastener explicitly requires T-25; matching hex key if applicable"], extra:["Brake maker’s instructions; specialist parts/tools as needed"],
    compatibility:"Rotor, caliper, pad, hydraulic, and mechanical systems vary. Rotor fastener types are not universal.",
    warning:"Do not touch rotor or pads with oily fingers. Never lubricate or wipe them with an unapproved substance. Do not squeeze a hydraulic lever with wheel removed unless the maker’s spacer is installed.",
    steps:["With the bicycle stable, inspect rotor for cracks, severe bends, contamination, loose fasteners, or damage. Avoid touching braking track.","Check the wheel is securely installed and rotor runs through the caliper without severe contact.","Inspect pad material through the caliper if possible without dismantling it. Confirm wear against maker indicators.","Squeeze each brake lever gently. Hydraulic levers should not suddenly sink; mechanical cable should not be frayed or loose.","Do not straighten a rotor or open hydraulic lines at the station. Follow component-specific instructions."],
    success:["Rotor and pads show no obvious damage or contamination; lever feel is normal; brake operates without severe rub."], safety:["Test braking while stationary; walk-check stopping before riding."],
    stop:"Rotor cracked/severely bent, pads contaminated or worn, hydraulic leak, lever failure, or wheel/rotor fit uncertain.", video:"", related:["disc-rub","disc-pad-replacement","brake-lever-cable"]
  },
  {
    id:"disc-rub", title:"Recognize disc-brake rubbing", category:"brakes", common:false, keywords:["disc rubbing","rotor","wheel rub","scrape"],
    summary:"Distinguish a minor alignment sound from wheel, rotor, or brake damage.",
    symptoms:["A light periodic scrape occurs, or rotor rub changes when the wheel spins."], difficulty:"Easy to assess", time:"5 minutes (estimate)",
    available:["No tool for diagnosis; matching hex key only if the brake maker specifies it"], extra:["Brake maker’s instructions; specialist rotor tool or mechanic if needed"],
    compatibility:"Some pad contact is system-dependent. Hydraulic and mechanical calipers have different adjustment procedures.",
    warning:"A badly bent rotor, loose wheel, or brake that drags heavily is unsafe. Do not bend a rotor by hand or loosen unfamiliar caliper bolts.",
    steps:["Check that the wheel is properly seated and secured first. A misseated wheel may make a brake rub.","Spin the wheel slowly and observe whether rubbing is constant or occurs once per revolution. Check for rotor damage without touching its braking surface.","Squeeze and release the brake lever. Confirm it returns and the wheel can rotate without severe drag.","Use only the exact caliper alignment procedure provided by its maker. If the rotor is bent or rubbing persists, stop."],
    success:["Wheel is secure, rotor has no visible serious damage, and brake releases without significant drag."], safety:["Test brake function and wheel attachment before riding."],
    stop:"Rotor is bent/cracked/loose, wheel is not secure, brake drags or fails to release, or adjustment steps are unclear.", video:"", related:["disc-brake-inspect","wheel-inspection","remove-reinstall-wheel"]
  },
  {
    id:"disc-pad-replacement", title:"Disc-brake pad replacement and compatibility", category:"brakes", common:false, keywords:["disc pads","pad replacement","rotor","caliper"],
    summary:"Disc pads are model-specific and replacement involves contamination-sensitive parts.",
    symptoms:["Disc pads reached their wear limit, are damaged, or contaminated."], difficulty:"Advanced; professional service is appropriate", time:"30–60 minutes (estimate)",
    available:["No specialized disc-brake tools are confirmed; T-25 only if an exact fastener specifies it"], extra:["Correct pads, rotor spacer, brake-specific tools, manufacturer instructions"],
    compatibility:"Pad shape, backing plate, compound, rotor material, and caliper model must match. Follow bed-in instructions after replacement.",
    warning:"No replacement pads or specialized disc-brake tools are confirmed at the station. Do not contaminate pads/rotor or squeeze the lever with the wheel removed and no spacer.",
    steps:["Identify the exact caliper and approved pad. Confirm rotor and pad material compatibility using manufacturer guidance.","Obtain the specified tools and a rotor spacer. Keep clean hands and prevent oil/cleaner from contacting rotor or pads.","Follow the caliper maker’s instructions to remove and install pads, clips, and retaining hardware; do not improvise or guess torque.","Restore wheel and rotor position, check lever feel, then follow the maker’s bedding-in procedure in a controlled safe area.","If braking is weak, noisy, inconsistent, or contaminated, do not ride; consult a qualified mechanic."],
    success:["Correct pads are installed, lever feel is normal, rotor/pads are clean, and braking is verified per manufacturer procedure."], safety:["Do not ride until brakes are fully functional and bedded in as instructed."],
    stop:"Exact pad/tool compatibility or procedure is unknown, hydraulic system is opened/leaking, or brake behavior is not correct.", video:"", related:["brake-pads","disc-brake-inspect","disc-rub"]
  },
  {
    id:"brake-lever-cable", title:"Check brake lever feel and cable condition", category:"brakes", common:false, keywords:["brake lever","cable","housing","frayed"],
    summary:"A changed lever feel or damaged cable can mean the brake is not safe to use.",
    symptoms:["Lever feels spongy, pulls to the handlebar, sticks, or braking has changed."], difficulty:"Easy to inspect", time:"5 minutes (estimate)",
    available:["No tool for initial inspection; matching tool only if specified by brake maker"], extra:["Compatible cable/housing or brake service tools if replacement is required"],
    compatibility:"Mechanical cable and hydraulic brakes require different service. Hydraulic systems use fluid-specific procedures.",
    warning:"Replacement cables and housing are not supplied. Do not ride with frayed cable, fluid leak, lever failure, or uncertain braking. Do not open hydraulic lines.",
    steps:["Squeeze each brake lever slowly while stationary and note whether it engages smoothly and returns fully.","For cable brakes, visually inspect exposed cable and housing for fraying, corrosion, kinks, split housing, or movement at anchor points.","For hydraulic brakes, inspect for fluid residue and watch for a lever that sinks or feels abnormal. Do not touch or open the system.","If cable tension or hydraulic service is needed, follow the exact brake instructions or seek a mechanic. Never guess torque or bleed fluid at the station.","Check both brakes again before moving the bicycle."],
    success:["Levers engage predictably and release; cable/housing is undamaged and hydraulic system shows no leak."], safety:["Test stopping force while stationary and while walking the bicycle."],
    stop:"Fraying, corrosion, leak, lever bottoming, or inconsistent brake operation.", video:"", related:["rim-brake-inspect","disc-brake-inspect","rim-brake-adjust"]
  },
  {
    id:"brake-mechanic", title:"When a brake needs a qualified mechanic", category:"brakes", common:false, keywords:["professional","brake problem","hydraulic","unsafe"],
    summary:"Brakes are safety-critical. Some symptoms require professional diagnosis instead of roadside adjustment.",
    symptoms:["Brake failure, fluid leak, cracked part, recurring rub, or uncertain repair."], difficulty:"Assessment guide", time:"A few minutes to assess",
    available:[], extra:["Qualified bicycle mechanic; compatible replacement parts and tools"],
    compatibility:"Brake maker and bicycle model instructions govern all service, including hydraulic fluid and torque.",
    warning:"Do not ride when a brake fails, feels abnormal, is contaminated, or cannot hold the bicycle reliably.",
    steps:["Stop riding if either brake is unreliable, lever bottoms out, cable is frayed, fluid leaks, rotor/rim is cracked, or pad is loose.","Do not open hydraulic systems, straighten severely bent rotors, or use improvised parts.","Record the brake model and describe the symptom to a qualified mechanic. Arrange walking or transport if needed.","After repair, verify both brakes and complete the safety checklist before riding."],
    success:["A qualified mechanic has diagnosed and corrected the safety-critical fault; both brakes pass checks."], safety:["Do not ride until braking is dependable."],
    stop:"If you are asking whether a questionable brake is safe, stop and get a mechanic’s inspection.", video:"", related:["brake-lever-cable","disc-brake-inspect","rim-brake-inspect"]
  },

  {
    id:"understand-gears", title:"Understand bicycle gears", category:"gears", common:false, keywords:["gears","shifting","derailleur","sprocket"],
    summary:"Gears change pedaling effort; smooth shifts require pedaling gently and compatible components.",
    symptoms:["You want to choose gears or understand a shifting problem."], difficulty:"Easy", time:"5 minutes",
    available:[], extra:["No parts needed"],
    compatibility:"Derailleur, internal-gear, and e-bike systems differ. Manufacturer guidance applies to the specific bicycle.",
    warning:"Do not shift under extreme force or while stationary unless the system allows it. Stop if chain jams or drivetrain skips.",
    steps:["The front chainring(s) and rear sprockets provide different gear ratios. Larger rear sprockets generally make pedaling easier; smaller ones harder.","While pedaling gently, shift one gear at a time and ease pressure on the pedals during the shift.","Avoid cross-chaining where the chain runs at an extreme angle if the bicycle maker advises against it.","If shifting is noisy, delayed, or the chain skips, stop and use the diagnosis guide rather than forcing more shifts."],
    success:["You can shift gently through available gears without chain jams or unsafe skipping."], safety:["Keep hands and clothing away from moving chain and gears."],
    stop:"Chain jams, skips under load, derailleur is bent, or gears do not operate safely.", video:"", related:["shifting-problems","rear-derailleur","front-derailleur","dropped-chain"]
  },
  {
    id:"shifting-problems", title:"Diagnose shifting problems", category:"gears", common:true, keywords:["gear shift","derailleur","chain","cable","skipping"],
    summary:"Check simple causes first and avoid adjusting limits or cable tension by guesswork.",
    symptoms:["Shifts are slow, noisy, skip gears, or chain falls off."], difficulty:"Easy to diagnose; adjustment varies", time:"5–15 minutes",
    available:["Hex key set or screwdriver only if a specific, identified fastener requires it"], extra:["Manufacturer instructions; replacement cable/housing or mechanic if needed"],
    compatibility:"Rear/front derailleurs, electronic shifting, internal hubs, and e-bikes use different procedures.",
    warning:"Do not adjust limit screws without understanding them; incorrect adjustment can send the chain into spokes or off the chainring. Cables and housing are not supplied.",
    steps:["Check that the wheel is fully seated and chain is clean enough to move freely. Look for visible damage, a bent derailleur, frayed cable, or housing pulled from a stop.","With the bicycle stable, pedal slowly by hand and shift one gear at a time. Note where the problem occurs; never put fingers near moving parts.","If the chain skips, jams, or threatens to enter the spokes, stop pedaling immediately.","Use only the exact adjustment procedure for the identified component. If limit adjustment, cable replacement, or hanger alignment is needed, consult a mechanic."],
    success:["Shifts are consistent across gears without skipping, chain drop, or unusual noises."], safety:["Test every gear gently while stationary and avoid riding if the chain may jam or derail."],
    stop:"Bent derailleur/hanger, damaged cable, chain skips/drops, or adjustment instructions unavailable.", video:"", related:["rear-derailleur","front-derailleur","bent-hanger","shift-cable"]
  },
  {
    id:"rear-derailleur", title:"Basic rear-derailleur adjustments", category:"gears", common:false, keywords:["rear derailleur","indexing","limit screw","shift"],
    summary:"Rear shifting adjustments are model-specific; a bent hanger must be addressed before tuning.",
    symptoms:["Rear shifts do not align consistently after wheel and cable condition are checked."], difficulty:"Advanced", time:"15–30 minutes estimate",
    available:["Matching hex key or screwdriver only if the identified component requires it"], extra:["Derailleur maker’s instructions; hanger alignment tool or mechanic if needed"],
    compatibility:"Derailleur type, drivetrain speeds, cable pull, and electronic systems vary.",
    warning:"Incorrect limit settings can send the chain into spokes or off the cassette. The station does not include a confirmed hanger alignment tool or replacement cable.",
    steps:["Confirm the wheel is seated correctly, chain is serviceable, and derailleur/hanger is not visibly bent. A bent hanger requires proper alignment, not indexing adjustment.","Identify the derailleur model and follow its adjustment instructions exactly.","Change only the specified adjuster in small increments, with the bicycle stable and chain movement controlled. Keep hands away from moving parts.","Check shifting across the cassette while pedaling gently by hand. If the chain approaches spokes or drops off either end, stop immediately.","Secure any fasteners to maker specification and test shifting before riding."],
    success:["Chain shifts reliably across the cassette and stays within safe limits."], safety:["Keep chain away from spokes; test all gears gently and perform a pre-ride check."],
    stop:"Hanger appears bent, limit position is uncertain, chain approaches spokes, or adjustment fails to improve shifting.", video:"", related:["shifting-problems","bent-hanger","shift-cable","chain-wear"]
  },
  {
    id:"front-derailleur", title:"Basic front-derailleur adjustments", category:"gears", common:false, keywords:["front derailleur","chainring","limit","shifting"],
    summary:"Front shifting depends on exact derailleur, chainring, and frame setup.",
    symptoms:["Chain rubs the front cage, shifts slowly, or drops from a chainring."], difficulty:"Advanced", time:"15–30 minutes estimate",
    available:["Matching hex key or screwdriver only if the identified fastener requires it"], extra:["Component instructions; compatible cable or mechanic if needed"],
    compatibility:"Front-derailleur design, chainring count, cable routing, and mounting style differ.",
    warning:"Incorrect adjustment can throw the chain off the crank or damage components. Stop if chain falls toward the frame or pedals unpredictably.",
    steps:["Inspect for a loose or bent derailleur, damaged cable, and chain/chainring damage. Do not adjust a visibly damaged component.","Identify the exact derailleur and use its manufacturer procedure; do not assume limit screws or cage angles are universal.","Make only small, specified adjustments with the drivetrain stationary or turned slowly by hand and fingers kept clear.","Shift gently between front rings and rear sprockets. Stop immediately if chain drops, binds, or approaches the crank/frame.","Check all fasteners and shifting before riding."],
    success:["Front shifts are controlled and chain remains safely on intended chainrings."], safety:["Check that pedals/crank turn freely and chain cannot drop dangerously."],
    stop:"Derailleur or mount is bent/loose, chain repeatedly drops, or instructions are unavailable.", video:"", related:["shifting-problems","bent-hanger","chain-wear"]
  },
  {
    id:"bent-hanger", title:"Identify a potentially bent derailleur hanger", category:"gears", common:false, keywords:["hanger","bent derailleur","shifting","spokes"],
    summary:"A misaligned hanger can cause poor shifting and damage; visual inspection is not enough to true it.",
    symptoms:["Shifts vary across gears, derailleur looks tilted, or chain nears spokes."], difficulty:"Easy to recognize; specialist correction", time:"5 minutes",
    available:[], extra:["Correct replacement hanger if damaged; hanger alignment gauge or mechanic"],
    compatibility:"Hangers are frame-specific. Some are replaceable; some designs differ substantially.",
    warning:"Do not bend a hanger by hand or use the derailleur as a lever. A rear derailleur entering the spokes can cause a crash or damage the frame.",
    steps:["From behind the bicycle, look for obvious derailleur tilt or impact damage without touching or forcing it.","Check that wheel is properly seated and axle secure; a misseated wheel can mimic alignment problems.","If the derailleur is visibly bent or chain approaches spokes, do not pedal or ride.","Ask a qualified mechanic to check alignment with the correct gauge or replace the hanger with the exact compatible part."],
    success:["Hanger alignment has been checked with an appropriate tool and shifting is safe."], safety:["Do not ride with a bent or uncertain hanger/derailleur."],
    stop:"Any suspected bend, impact damage, or chain movement toward the spokes.", video:"", related:["shifting-problems","rear-derailleur","chain-replacement"]
  },
  {
    id:"shift-cable", title:"Recognize worn shift cables and housing", category:"gears", common:false, keywords:["shift cable","housing","frayed","gear"],
    summary:"Damaged cable or housing often causes sticky, inconsistent shifting and requires compatible replacement.",
    symptoms:["Shifter feels sticky, cable strands are frayed, or shifting degrades."], difficulty:"Easy to inspect", time:"5 minutes",
    available:[], extra:["Correct shift cable and housing; compatible cutters and installation tools"],
    compatibility:"Cable end fittings, housing type, routing, and electronic systems vary. Shift cables are not brake cables.",
    warning:"Replacement cables/housing and cable cutters are not confirmed at the station. Do not ride if a cable could jam shifting or cause chain derailment.",
    steps:["Inspect visible inner cable for fraying, rust, kinks, and loose ends. Check housing for cracks, sharp bends, or ends pulled from stops.","Operate the shifter gently while stationary and note unusual resistance. Do not pull a frayed cable through a shifter.","Do not cut or replace cable using improvised tools. Identify the system and obtain correct parts and manufacturer instructions.","After service, shifting must be checked through the gear range with safe chain limits."],
    success:["Cable and housing move smoothly and shifting is consistent."], safety:["Avoid moving chain while hands are near it; verify safe gear operation before riding."],
    stop:"Frayed cable, damaged housing, stiff shifter, or uncertain cable routing.", video:"", related:["shifting-problems","rear-derailleur","front-derailleur"]
  },

  {
    id:"wheel-inspection", title:"Inspect a wheel for damage or wobble", category:"wheels", common:true, keywords:["wheel wobble","rim","spokes","wheel damage"],
    summary:"Check for damage and distinguish a minor alignment issue from an unsafe wheel.",
    symptoms:["Wheel wobbles, rubs, has loose spokes, or makes new noises."], difficulty:"Easy to inspect", time:"5–10 minutes",
    available:["No wheel-truing tools are confirmed"], extra:["Wheel truing stand and specialist tools for correction; mechanic"],
    compatibility:"Rim, hub, spoke, and brake designs vary. Disc-brake and rim-brake checks differ.",
    warning:"Do not ride with a cracked rim, broken spoke affecting the wheel, loose hub, tire bulge, or severe wobble. The station does not include a truing stand.",
    steps:["Secure the bicycle and spin the wheel slowly. Observe rim/tire movement relative to fork/frame or brake pads.","Inspect rim for cracks, dents, deep wear, and tire seating. Check for broken, loose, or visibly uneven spokes without overtightening them.","Hold the rim and check for side-to-side play at the hub. Do not confuse normal tire tread variation with a bent rim.","If wobble is substantial or damage is visible, stop. Do not adjust spoke tension by guesswork.","Have a mechanic assess wheel truing, spoke tension, hub play, and structural condition."],
    success:["No cracks or structural damage; wheel spins without severe wobble or hub play."], safety:["Confirm wheel attachment, brake clearance, and tire condition."],
    stop:"Cracked/dented rim, broken/loose spokes, hub play, severe wobble, or tire not seated.", video:"", related:["spoke-inspection","wheel-truing","quick-release","thru-axle"]
  },
  {
    id:"spoke-inspection", title:"Basic spoke inspection", category:"wheels", common:false, keywords:["spokes","wheel","broken spoke","tension"],
    summary:"Inspect spokes for obvious damage; reliable tension assessment needs experience and sometimes tools.",
    symptoms:["A spoke is loose, broken, bent, or wheel has developed a wobble."], difficulty:"Easy to inspect", time:"5 minutes",
    available:[], extra:["Correct replacement spoke, wheel-specific tools, and mechanic for repair"],
    compatibility:"Spoke length, type, lacing, and tension depend on the exact wheel.",
    warning:"Do not tighten spokes at random. Uneven tension can worsen wheel damage. No spoke wrench or truing stand is confirmed.",
    steps:["Look along each spoke for breaks, bends, corrosion, or a loose nipple. Avoid pressing hard on spokes.","Spin the wheel and check for wobble or contact with brake/frame.","If any spoke is broken or significantly loose, stop riding and have the wheel inspected.","A spoke replacement and wheel tension correction should follow wheel-maker guidance and normally requires specialist tools."],
    success:["Spokes show no obvious damage and wheel remains true enough for safe use under manufacturer guidance."], safety:["Check rim, tire, wheel attachment, and brakes."],
    stop:"Any broken/loose spoke, crack, or new wheel wobble.", video:"", related:["wheel-inspection","wheel-truing","pre-ride-check"]
  },
  {
    id:"wheel-truing", title:"When wheel truing needs a specialist", category:"wheels", common:false, keywords:["true wheel","truing stand","spoke tension"],
    summary:"Wheel truing means correcting rim position and spoke tension; it is not a casual bolt adjustment.",
    symptoms:["Rim wobbles, rubs, or spokes have uneven tension."], difficulty:"Specialist work", time:"Varies",
    available:[], extra:["Truing stand, correct spoke wrench, tension-measuring equipment as appropriate"],
    compatibility:"Wheel construction, spoke count, rim type, and allowable tension vary by manufacturer.",
    warning:"The station has no confirmed truing stand or spoke wrench. Do not use pliers, random wrench sizes, or guess tension.",
    steps:["Stop riding if wheel has a crack, broken spoke, severe wobble, or poor brake clearance.","Have a qualified wheel builder assess rim damage, spoke tension, hub condition, and correct tolerances.","Use the wheel maker’s specifications and appropriate tools. Replace damaged parts with compatible components.","After service, confirm true, tension, tire seating, wheel retention, and brake function."],
    success:["Wheel is structurally sound, correctly tensioned and trued, and clears the frame/brake safely."], safety:["Do not ride until wheel integrity and brakes are verified."],
    stop:"Any structural damage or uncertainty; professional wheel inspection is needed.", video:"", related:["wheel-inspection","spoke-inspection","quick-release"]
  },
  {
    id:"quick-release", title:"Check and secure a quick-release wheel", category:"wheels", common:false, keywords:["quick release","wheel attachment","lever","axle"],
    summary:"A quick-release uses a cam lever and must be adjusted and closed using its maker’s method.",
    symptoms:["Wheel was removed or quick-release lever may be loose."], difficulty:"Moderate; safety-critical", time:"5 minutes",
    available:[], extra:["Bicycle/quick-release maker’s instructions"],
    compatibility:"Quick-release mechanisms differ. Some lever designs have safety features; do not use a generic procedure for an unknown axle.",
    warning:"Never ride with a loose or incorrectly closed quick-release. Do not use the lever as a wing nut to tighten it.",
    steps:["Confirm the bicycle uses a quick-release, not a thru-axle or nutted axle. Read its maker’s instructions if possible.","Check that the wheel axle sits fully in both dropouts and washers/springs are in the specified arrangement.","Use the lever’s intended cam action and adjustment nut as directed. The lever should close securely and not contact rotor, frame, or fork dangerously.","Check wheel centering, spin freely, apply brakes, and pull/push the wheel gently to confirm retention.","If lever force or adjustment is unclear, ask a mechanic before riding."],
    success:["Axle is seated, lever is correctly closed, wheel centered, and brake operates."], safety:["Recheck wheel retention and brake before each ride after removal."],
    stop:"Axle type or closure method is uncertain, lever is damaged, or wheel does not remain securely retained.", video:"", related:["remove-reinstall-wheel","thru-axle","wheel-inspection"]
  },
  {
    id:"thru-axle", title:"Understand thru-axle installation", category:"wheels", common:false, keywords:["thru axle","wheel attachment","hex key","torque"],
    summary:"Thru-axles have model-specific threads, levers, and tightening requirements.",
    symptoms:["Wheel was removed or axle needs checking."], difficulty:"Moderate; safety-critical", time:"5–10 minutes",
    available:["Hex key set only if the axle requires a matching size"], extra:["Bicycle/axle instructions; torque wrench if specified"],
    compatibility:"Axle length, thread pitch, lever design, and torque differ. A quick-release procedure does not apply.",
    warning:"Do not force threads or guess torque. A torque wrench is not confirmed at the station. Never ride with a loose axle.",
    steps:["Identify the exact axle and consult the frame/fork instructions. Confirm it belongs to this wheel and frame.","Insert the wheel fully with rotor correctly between pads and align the axle without cross-threading.","Thread and close the axle exactly as specified. Use only the maker’s torque value and tool method; do not substitute a quick-release setting.","Check wheel alignment, free rotation, brake operation, and secure retention.","If the required torque or axle tool is unknown, have a mechanic verify it."],
    success:["Correct axle is fully engaged and secured to its maker’s specification; wheel and brakes function."], safety:["Verify attachment every time the wheel is removed."],
    stop:"Axle threads bind, compatibility is uncertain, required torque/tool unavailable, or wheel is not secure.", video:"", related:["remove-reinstall-wheel","quick-release","wheel-inspection"]
  },
  {
    id:"pedal-tightening", title:"Identify a loose pedal and tightening direction", category:"wheels", common:false, keywords:["pedal","thread direction","left pedal","right pedal"],
    summary:"Pedals have opposite thread directions; use the correct side, tool fit, and manufacturer instructions.",
    symptoms:["Pedal feels loose, clicks, or moves at the crank."], difficulty:"Moderate; crank threads can be damaged", time:"5–10 minutes",
    available:["Headset/pedal wrench only if it fits the pedal flats"], extra:["Correct pedal tool; manufacturer instructions; compatible grease only if specified (not supplied)"],
    compatibility:"Some pedals use wrench flats; others use an internal hex. Left and right threads are opposite.",
    warning:"Do not force a pedal or cross-thread it. A loose pedal can damage the crank and cause a fall. No lubricant is confirmed supplied.",
    steps:["Stop riding and identify the left and right pedal, often marked L and R. Determine whether the pedal uses flats or an internal hex.","Follow the crank/pedal maker’s installation instructions. The left pedal tightens in the opposite direction from the right when viewed from the outside of each crank.","Start threads by hand and ensure they turn smoothly in the correct direction. If resistance starts immediately, stop; do not use a wrench to force it.","Use a correctly fitting tool and the specified torque if provided; a torque wrench is not confirmed at this station.","Check for crank thread damage or persistent looseness; have a mechanic inspect if needed."],
    success:["Pedal is correctly threaded and tightened to its maker’s specification without play."], safety:["Check pedal and crank security before riding."],
    stop:"Pedal is cross-threaded, crank threads damaged, correct tool/torque unavailable, or play remains.", video:"", related:["loose-crank","pre-ride-check"]
  },
  {
    id:"loose-crank", title:"Recognize a loose crank arm", category:"wheels", common:false, keywords:["crank arm","pedals","loose crank","bottom bracket"],
    summary:"Crank looseness can damage the crank or cause sudden loss of pedaling control.",
    symptoms:["Crank moves side to side, clicks under load, or feels loose."], difficulty:"Easy to recognize; repair varies", time:"5 minutes",
    available:["Hex key only if the exact crank fastener uses a matching key; no torque wrench confirmed"], extra:["Crank-specific instructions and torque wrench where specified; mechanic"],
    compatibility:"Crank attachment systems use different fasteners and procedures. Do not assume a generic bolt tightening method.",
    warning:"Stop riding if crank arm is loose. Do not tighten by guesswork; over/under-tightening can cause failure.",
    steps:["Hold the bicycle stable and gently check each crank arm for movement relative to the spindle; do not pedal under load.","Look for damaged threads, cracks, missing fasteners, or movement at the bottom bracket.","Identify the exact crank model and its maker’s attachment procedure and torque.","If a torque wrench or specialized puller is required, the station does not confirm it; seek a mechanic."],
    success:["Cranks have no abnormal play and fasteners meet the crank maker’s specification."], safety:["Check pedal and crank security and listen for unusual noises on a mechanic-approved test."],
    stop:"Any looseness, crack, damaged fastener, or required torque/tool uncertainty.", video:"", related:["pedal-tightening","pre-ride-check","loose-headset"]
  },
  {
    id:"loose-headset", title:"Recognize headset play", category:"wheels", common:false, keywords:["headset","steering","fork","handlebar"],
    summary:"Headset play affects steering and should not be ignored or adjusted without identifying the system.",
    symptoms:["Clunk at the front when braking, steering feels loose, or fork shifts in frame."], difficulty:"Easy to check; adjustment varies", time:"5 minutes",
    available:["Hex key only where specified by the exact headset/stem; torque wrench not confirmed"], extra:["Bicycle maker’s instructions; mechanic if adjustment is unclear"],
    compatibility:"Threaded, threadless, integrated, and suspension systems differ. Stem bolts and top cap have different roles.",
    warning:"Do not ride with loose steering. Do not loosen stem bolts or overtighten a headset top cap by guesswork.",
    steps:["Hold the front brake and gently rock the bicycle forward/back while feeling for movement at the headset. Repeat with the wheel lifted and steer slowly.","Check for obvious cracks, loose stem, or damaged fork. Do not use a hard impact test.","Identify the headset and stem system. Follow the maker’s specific adjustment sequence and torque values.","If play remains, steering binds, or the stem/fork appears damaged, stop and seek a mechanic."],
    success:["Steering is smooth without detectable play and all fasteners meet specifications."], safety:["Check steering and handlebar security before riding."],
    stop:"Any play that cannot be corrected using verified instructions, binding, crack, or loose stem.", video:"", related:["handlebar-position","pre-ride-check","loose-crank"]
  },
  {
    id:"saddle-adjustment", title:"Adjust saddle height and position", category:"wheels", common:false, keywords:["saddle","seat height","seatpost","seat clamp"],
    summary:"Adjust only a compatible clamp and stay within the seatpost and frame limits.",
    symptoms:["Saddle is too high, low, or positioned uncomfortably."], difficulty:"Easy when fastener is identified", time:"5–10 minutes",
    available:["Hex key set if the clamp uses a matching hex fastener","Headset/pedal wrench only if the actual design is compatible"], extra:["Bicycle/seatpost instructions; torque wrench if specified"],
    compatibility:"Seatpost clamps may use hex bolts, quick releases, or other designs. Rail and post diameters vary.",
    warning:"Do not raise a seatpost past its minimum-insertion mark. Never clamp carbon parts beyond specified torque; torque wrench not confirmed.",
    steps:["Identify the clamp type and read frame, post, and saddle instructions. Check the minimum-insertion line remains inside the frame.","Use a matching tool only if the fastener type and size are confirmed. Release the clamp just enough to move the post.","Set height and saddle position within maker limits. Keep the saddle straight and clamp the intended part, not the post’s unsupported edge.","Tighten to the manufacturer’s specification. If torque is required and no torque wrench is available, do not guess.","Check saddle does not twist or slide with a firm hand test before riding."],
    success:["Saddle is within insertion/position marks, secure, aligned, and does not move."], safety:["Check saddle and seatpost security before every ride after adjustment."],
    stop:"Clamp type or torque is uncertain, post is damaged, minimum insertion cannot be met, or saddle moves.", video:"", related:["pre-ride-check","handlebar-position","loose-headset"]
  },
  {
    id:"handlebar-position", title:"Adjust handlebar position safely", category:"wheels", common:false, keywords:["handlebar","stem","steering","position"],
    summary:"Handlebar adjustment is allowed only when the component design and fasteners are positively identified.",
    symptoms:["Handlebar position is uncomfortable or appears misaligned."], difficulty:"Moderate; steering-critical", time:"10–20 minutes",
    available:["Hex key set only if the exact fastener matches"], extra:["Stem/handlebar maker instructions; torque wrench if specified"],
    compatibility:"Threaded stems, threadless stems, adjustable stems, and carbon bars use different procedures and limits.",
    warning:"Do not loosen an unfamiliar stem or faceplate. Never exceed rotation/angle limits or guess torque; steering failure can cause severe injury.",
    steps:["Identify stem and handlebar materials, clamp design, and adjustment limits. If carbon or an adjustable system is involved, read its manufacturer instructions.","Do not loosen steerer-clamp bolts or remove a faceplate unless the correct procedure is known.","Make only an allowed positional adjustment using matching tools; maintain correct clamp alignment and bolt sequence.","Tighten all fasteners to the specified torque with a torque wrench if required; not confirmed at this station.","Check handlebar alignment, brake/shift control position, cable routing, and that bars do not rotate under a firm stationary test."],
    success:["Bars are aligned, controls operate freely, and all clamps meet specifications without movement."], safety:["Check steering and brake control security before riding."],
    stop:"Component type, material, torque, or procedure uncertain; any crack or movement; cables bind.", video:"", related:["loose-headset","saddle-adjustment","pre-ride-check"]
  },

  {
    id:"clean-bicycle", title:"Clean a bicycle", category:"maintenance", common:false, keywords:["wash","clean","maintenance","dirt"],
    summary:"Remove dirt gently while protecting bearings, brakes, and electrical parts.",
    symptoms:["Frame, drivetrain, or wheels are dirty and need routine cleaning."], difficulty:"Easy", time:"20–40 minutes",
    available:[], extra:["Water, soft brushes, clean cloths, bicycle-compatible cleaner; not confirmed supplied"],
    compatibility:"E-bikes and component finishes may have special cleaning restrictions. Follow manufacturer guidance.",
    warning:"Do not spray high-pressure water at bearings, seals, suspension, or electrical parts. Keep cleaner and oil off brakes, tires, and grips.",
    steps:["Move the bicycle away from traffic and electrical hazards. For e-bikes, follow maker instructions and do not open battery/electrical enclosures.","Use gentle water and bicycle-compatible cleaner with a soft cloth or brush. Avoid pressure washers and soaking bearings.","Clean drivetrain separately using suitable supplies; do not let greasy runoff reach rotors, pads, rim tracks, or tires.","Rinse gently if product instructions require it and dry the bicycle with a clean cloth.","Inspect frame and components for damage while cleaning. Lubricate a clean, dry chain only with a suitable lubricant and wipe excess."],
    success:["Bicycle is clean and dry; brakes remain uncontaminated; no damage or unusual looseness is found."], safety:["Check brake surfaces and tires for contamination before riding."],
    stop:"Cracked parts, water ingress concern in e-bike electronics, or contaminated braking surfaces.", video:"", related:["clean-lube-chain","basic-inspection","pre-ride-check"]
  },
  {
    id:"basic-inspection", title:"Perform a basic bicycle inspection", category:"maintenance", common:false, keywords:["inspection","maintenance","safety","wear"],
    summary:"A brief inspection can reveal visible problems before they become a roadside failure.",
    symptoms:["Routine check, unusual noise, or preparation for a ride."], difficulty:"Easy", time:"5–10 minutes",
    available:[], extra:["No parts needed; mechanic and replacement parts if faults appear"],
    compatibility:"Inspection does not replace scheduled service or maker-specific maintenance, especially for e-bikes and suspension.",
    warning:"Do not ride with cracked structural parts, questionable brakes, loose wheels, or steering problems.",
    steps:["Look over frame, fork, wheels, tires, and visible fasteners for cracks, dents, bulges, damage, and missing parts.","Check wheel attachment, tire condition/pressure, brake operation, steering security, pedals/cranks, and chain.","Spin each wheel and listen for rubbing or unusual noises. Check for play at the wheel and headset without forcing parts.","If anything is loose, damaged, or uncertain, stop and consult the maker or a qualified mechanic.","Use the pre-ride checklist before riding."],
    success:["No safety-critical damage, looseness, or brake/wheel/steering issue remains."], safety:["If unresolved, do not ride."],
    stop:"Any visible structural damage, abnormal movement, brake fault, or unexplained noise.", video:"", related:["pre-ride-check","wheel-inspection","brake-lever-cable"]
  },
  {
    id:"wear-items", title:"Understand common wear items", category:"maintenance", common:false, keywords:["wear","replacement","maintenance","chain tires pads"],
    summary:"Tires, chains, brake pads, cables, and other parts wear at different rates and need compatible replacements.",
    symptoms:["Part has reached a wear mark, performance changes, or inspection finds damage."], difficulty:"Easy to understand", time:"5 minutes",
    available:[], extra:["Model-compatible replacement parts and manufacturer guidance"],
    compatibility:"Wear limits, service intervals, and replacement standards depend on part and riding conditions.",
    warning:"A component can be unsafe before it looks obviously worn. Do not ignore a tire bulge, brake wear indicator, chain damage, or frayed cable.",
    steps:["Check maker-specified wear indicators and service intervals for tires, chain, pads, cables, bearings, and suspension.","Inspect more often after wet, muddy, salty, or high-mileage use and after impacts.","Use exact compatible parts. Do not assume similar-looking components fit.","Ask a qualified mechanic to assess parts where wear measurement or disassembly is required."],
    success:["Wear is assessed against manufacturer limits and needed parts are replaced compatibly."], safety:["Do not ride when a safety-critical part exceeds limits or is damaged."],
    stop:"Limit is reached, damage is suspected, or compatibility cannot be confirmed.", video:"", related:["tire-sizing","chain-wear","brake-pads","basic-inspection"]
  },
  {
    id:"pre-ride-check", title:"Perform a pre-ride safety check", category:"maintenance", common:true, keywords:["safety check","checklist","before ride","bike safety"],
    summary:"Use this phone-friendly checklist after repairs and before a ride.",
    symptoms:["Before every ride, after a repair, or when the bicycle feels different."], difficulty:"Easy", time:"2–5 minutes",
    available:[], extra:["No parts needed; resolve issues before riding"],
    compatibility:"Follow manufacturer and local safety guidance. The list cannot identify every hidden defect.",
    warning:"If any safety-critical issue remains unresolved, do not ride. This checklist is not a substitute for professional inspection.",
    steps:["Tires: check condition, seating, and pressure against the tire and wheel guidance.","Wheels: confirm both are fully seated and securely attached; spin them and check for severe wobble.","Brakes: test both levers and confirm each brake stops the wheel and releases normally.","Handlebars and steering: check for play, cracks, or movement; steer smoothly.","Pedals and cranks: check for looseness, cracks, and unusual movement.","Chain and gears: look for damage and turn the pedals gently; stop if chain jams, skips, or drops.","Frame and fork: look for cracks, bends, or impact damage. Listen for unusual noises and check visible fasteners.","If any item fails or you are unsure, do not ride until a qualified mechanic has addressed it."],
    success:["All listed checks pass; bicycle responds normally and no unresolved damage or looseness remains."], safety:["A failed safety-critical check means do not ride."],
    stop:"Any brake, steering, wheel, frame/fork, pedal/crank, or drivetrain defect remains unresolved.", video:"", related:["basic-inspection","wheel-inspection","brake-mechanic"]
  }
];

const REPAIR_BY_ID = Object.fromEntries(REPAIRS.map((repair) => [repair.id, repair]));
