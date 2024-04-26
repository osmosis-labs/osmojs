
def:
	git submodule update --remote
	

proto:
	buf export buf.build/cosmos/cosmos-sdk:v0.47.0 --output packages/osmojs/proto
	
	

